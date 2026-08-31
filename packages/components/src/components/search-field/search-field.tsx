import {
    Component,
    Element,
    Event,
    type EventEmitter,
    h,
    Listen,
    Method,
    Prop,
    State,
    Watch,
} from "@stencil/core";
import classNames from "classnames";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

export interface SuggestionItem {
    id: string;
    text: string;
    type?: "suggestion" | "history";
    scope?: string;
    resultCount?: number;
    metadata?: unknown;
}

@Component({
    tag: "ifx-search-field",
    styleUrl: "search-field.scss",
    shadow: true,
})
export class SearchField {
    private inputElement?: HTMLInputElement;
    private dropdownElement?: HTMLDivElement;
    private wrapperElement?: HTMLLabelElement;
    private focusEmitted: boolean = false;
    private announcementToken: number = 0;

    @Element() el!: HTMLIfxSearchFieldElement;

    @Prop({ mutable: true }) value: string = "";
    @Prop() readonly suggestions: SuggestionItem[] = [];
    @Prop() readonly showSuggestions: boolean = false;
    @Prop() readonly maxSuggestions: number = 10;
    @Prop() readonly maxHistoryItems: number = 5;
    @Prop() readonly enableHistory: boolean = true;
    @Prop() readonly historyKey: string = "ifx-search-history";
    @Prop() readonly historyHeaderText: string = "Recent Searches";
    @Prop() readonly ariaLabelText: string | null = "Search Field";
    @Prop() readonly ariaLabelledBy?: string | null;
    @Prop() readonly ariaDescribedBy?: string | null;
    @Prop() readonly deleteIconAriaLabel: string = "Clear search";
    @Prop() readonly historyDeleteAriaLabel: string = "Remove from history";
    @Prop() readonly dropdownAriaLabel: string = "Search suggestions and history";
    @Prop() readonly suggestionAriaLabel: string = "Search suggestion";
    @Prop() readonly historyItemAriaLabel: string = "Search history item";
    @Prop() readonly showDeleteIcon: boolean = false;
    @Prop() readonly disabled: boolean = false;
    @Prop() readonly size: 's' | 'l' = "l";
    @Prop() readonly placeholder: string = "Search";
    @Prop() readonly autocomplete: string = "off";
    @Prop() readonly maxlength?: number = undefined;

    @Event() ifxInput!: EventEmitter<string>;
    @Event() ifxSuggestionRequested!: EventEmitter<string>;
    @Event() ifxSuggestionSelected!: EventEmitter<SuggestionItem>;
    @Event() ifxFocus!: EventEmitter<void>;
    @Event() ifxBlur!: EventEmitter<void>;

    @State() showDeleteIconInternalState: boolean = false;
    @State() isFocused: boolean = false;
    @State() showDropdown: boolean = false;
    @State() filteredSuggestions: SuggestionItem[] = [];
    @State() selectedSuggestionIndex: number = -1;
    @State() searchHistory: string[] = [];
    @State() suggestionAnnouncement: string = "";

    @Listen("mousedown", { target: "document" })
    handleOutsideClick(event: MouseEvent) {
        const path = event.composedPath();
        const clickedInput = this.inputElement ? path.includes(this.inputElement) : false;
        const clickedDropdown = this.dropdownElement ? path.includes(this.dropdownElement) : false;
        const clickedWrapper = this.wrapperElement ? path.includes(this.wrapperElement) : false;
        if (!clickedInput && !clickedDropdown && !clickedWrapper) {
            this.hideDropdown();
        }
    }

    @Listen("keydown")
    handleKeyDown(event: KeyboardEvent) {
        switch (event.key) {
            case "ArrowDown":
                if (!this.showDropdown) return;
                event.preventDefault();
                this.navigateSuggestions(1);
                break;
            case "ArrowUp":
                if (!this.showDropdown) return;
                event.preventDefault();
                this.navigateSuggestions(-1);
                break;
            case "Enter":
                event.preventDefault();
                if (this.showDropdown && this.selectedSuggestionIndex >= 0) {
                    this.selectSuggestion(this.filteredSuggestions[this.selectedSuggestionIndex]);
                } else {
                    this.handleSearch();
                }
                break;
            case "Escape":
                if (this.showDropdown) {
                    this.hideDropdown();
                }
                break;
        }
    }

    @Watch("value")
    valueWatcher(newValue: string) {
        if (this.inputElement && newValue !== this.inputElement.value) {
            this.inputElement.value = newValue;
        }
        this.updateSuggestions();
    }

    @Watch("suggestions")
    suggestionsWatcher() {
        this.updateSuggestions();
        this.announceSuggestionCount();
    }

    private handleInput = () => {
        if (!this.inputElement) return;
        const query = this.inputElement.value;
        this.value = query;
        this.ifxInput.emit(this.value);
        if (!this.showSuggestions && !this.enableHistory) return;
        this.selectedSuggestionIndex = -1;
        if (this.showSuggestions) {
            this.requestSuggestions(query);
        } else {
            this.updateSuggestions();
        }
        this.showDropdown = this.filteredSuggestions.length > 0;
    };

    private handleDelete = () => {
        if (!this.disabled && this.inputElement) {
            this.inputElement.value = "";
            this.value = "";
            this.ifxInput.emit(this.value);
            this.hideDropdown();
        }
    };

    private handleSearch = () => {
        if (this.value.trim() && this.enableHistory) {
            this.addToHistory(this.value);
        }
        this.hideDropdown();
    };

    private focusInput() {
        if (!this.focusEmitted) {
            this.focusEmitted = true;
            this.isFocused = true;
            this.ifxFocus.emit();
        }
        if (this.showSuggestions || this.enableHistory) {
            if (this.value.length === 0) {
                this.showHistoryDropdown();
                this.showDropdown = this.filteredSuggestions.length > 0;
                if (this.showDropdown) {
                    this.announceSuggestionCount();
                }
            } else {
                this.updateSuggestions();
                this.showDropdown = this.filteredSuggestions.length > 0;
            }
        }
    }

    private blurInput() {
        setTimeout(() => {
            this.isFocused = false;
            this.focusEmitted = false;
            this.ifxBlur.emit();
        }, 150);
    }

    private loadSearchHistory() {
        if (this.enableHistory && typeof localStorage !== "undefined") {
            const stored = localStorage.getItem(this.historyKey);
            this.searchHistory = stored ? JSON.parse(stored) : [];
            this.updateSuggestions();
            if (this.value.length === 0 && this.searchHistory.length === 0) {
                this.showDropdown = false;
            }
        }
    }

    @Method()
    public async setFocus(): Promise<void> {
        this.inputElement?.focus();
    }

    @Method()
    public async clearSearchHistory(): Promise<void> {
        if (this.enableHistory && typeof localStorage !== "undefined") {
            localStorage.removeItem(this.historyKey);
            this.searchHistory = [];
            this.filteredSuggestions = [];
            this.selectedSuggestionIndex = -1;
            this.showDropdown = false;
            this.cancelSuggestionAnnouncement();
            this.updateSuggestions();
        }
    }

    private addToHistory(term: string) {
        if (!this.enableHistory || !term.trim()) return;
        const history = [...this.searchHistory];
        const existingIndex = history.indexOf(term);
        if (existingIndex > -1) {
            history.splice(existingIndex, 1);
        }
        history.unshift(term);
        this.searchHistory = history.slice(0, this.maxHistoryItems);
        if (typeof localStorage !== "undefined") {
            localStorage.setItem(this.historyKey, JSON.stringify(this.searchHistory));
        }
    }

    private removeFromHistory(term: string) {
        if (!this.enableHistory) return;
        const history = [...this.searchHistory];
        const index = history.indexOf(term);
        if (index > -1) {
            history.splice(index, 1);
            this.searchHistory = history;
            if (typeof localStorage !== "undefined") {
                localStorage.setItem(this.historyKey, JSON.stringify(this.searchHistory));
            }
            this.updateSuggestions();
            if (this.searchHistory.length === 0 && this.value.length === 0) {
                this.showDropdown = false;
                this.cancelSuggestionAnnouncement();
            }
        }
    }

    private handleHistoryDelete = (event: Event, term: string) => {
        event.stopPropagation();
        this.removeFromHistory(term);
    };

    private requestSuggestions(query: string) {
        this.ifxSuggestionRequested.emit(query);
        this.updateSuggestions();
    }

    private updateSuggestions() {
        const query = this.value.toLowerCase();
        const externalSuggestions = Array.isArray(this.suggestions) ? this.suggestions : [];
        const historySuggestions: SuggestionItem[] =
            this.enableHistory && this.searchHistory.length > 0
                ? this.searchHistory
                    .filter((term) => query.length === 0 || term.toLowerCase().includes(query))
                    .map((term, index): SuggestionItem => ({
                        id: `history-${index}`,
                        text: term,
                        type: "history" as const,
                    }))
                : [];

        const combinedSuggestions = [...externalSuggestions, ...historySuggestions];

        const uniqueSuggestions = combinedSuggestions.reduce(
            (unique: SuggestionItem[], current) => {
                const existingIndex = unique.findIndex(
                    (item) =>
                        item.text.toLowerCase() === current.text.toLowerCase() &&
                        item.scope === current.scope,
                );
                if (existingIndex === -1) {
                    unique.push(current);
                } else {
                    if (current.type === "history" && unique[existingIndex].type !== "history") {
                        unique[existingIndex] = current;
                    }
                }
                return unique;
            },
            [],
        );

        this.filteredSuggestions = uniqueSuggestions.slice(0, this.maxSuggestions);
        this.selectedSuggestionIndex = -1;
    }

    private navigateSuggestions(direction: number) {
        const maxIndex = this.filteredSuggestions.length - 1;
        if (direction > 0) {
            this.selectedSuggestionIndex =
                this.selectedSuggestionIndex < maxIndex
                    ? this.selectedSuggestionIndex + 1
                    : 0;
        } else {
            this.selectedSuggestionIndex =
                this.selectedSuggestionIndex > 0
                    ? this.selectedSuggestionIndex - 1
                    : maxIndex;
        }
    }

    private selectSuggestion(suggestion: SuggestionItem) {
        this.value = suggestion.text;
        if (this.inputElement) {
            this.inputElement.value = suggestion.text;
        }
        this.ifxSuggestionSelected.emit(suggestion);
        this.ifxInput.emit(this.value);
        if (this.enableHistory) {
            this.addToHistory(suggestion.text);
        }
        this.hideDropdown();
    }

    private hideDropdown() {
        this.showDropdown = false;
        this.cancelSuggestionAnnouncement();
        this.selectedSuggestionIndex = -1;
        this.isFocused = false;
    }

    private showHistoryDropdown() {
        if (this.enableHistory && this.searchHistory.length > 0) {
            const historySuggestions = this.searchHistory.map((term, index) => ({
                id: `history-${index}`,
                text: term,
                type: "history" as const,
            }));
            this.filteredSuggestions = historySuggestions.slice(0, this.maxSuggestions);
            this.selectedSuggestionIndex = -1;
        } else {
            this.filteredSuggestions = [];
        }
    }

    private isShowingOnlyHistory(): boolean {
        return (
            this.value.length === 0 &&
            this.filteredSuggestions.length > 0 &&
            this.filteredSuggestions.every((s) => s.type === "history")
        );
    }

    private cancelSuggestionAnnouncement() {
        this.announcementToken++;
        this.suggestionAnnouncement = "";
    }

    private announceSuggestionCount() {
        this.suggestionAnnouncement = "";
        const token = ++this.announcementToken;
        requestAnimationFrame(() => {
            if (token !== this.announcementToken) return;
            if (!this.showDropdown || this.filteredSuggestions.length === 0) return;
            const resultCount = this.filteredSuggestions.length;
            this.suggestionAnnouncement = `${resultCount} ${resultCount === 1 ? "result" : "results"} available`;
        });
    }

    private renderHighlightedText(text: string, query: string) {
        if (!query || query.length === 0) {
            return text;
        }
        const lowerText = text.toLowerCase();
        const lowerQuery = query.toLowerCase();
        const index = lowerText.indexOf(lowerQuery);
        if (index === -1) {
            return text;
        }
        const before = text.substring(0, index);
        const match = text.substring(index, index + query.length);
        const after = text.substring(index + query.length);
        return [before, <strong>{match}</strong>, after];
    }

    componentWillLoad() {
        this.loadSearchHistory();
    }

    async componentDidLoad() {
        if (!isNestedInIfxComponent(this.el)) {
            const framework = detectFramework();
            trackComponent("ifx-search-field", await framework);
        }
    }

    componentWillUpdate() {
        if (this.value !== "") {
            this.showDeleteIconInternalState = true;
        } else this.showDeleteIconInternalState = false;
    }

    render() {
        return (
            <div aria-disabled={this.disabled} class="search-field">
                <div
                    aria-atomic="true"
                    aria-live="polite"
                    class="suggestion-status"
                    role="status"
                >
                    {this.suggestionAnnouncement}
                </div>
                <label
                    ref={(el) => (this.wrapperElement = el)}
                    class={this.getWrapperClassNames()}
                >
                    <ifx-icon icon="search-16" class="search-icon"></ifx-icon>
                    <input
                        ref={(el) => (this.inputElement = el)}
                        type="search"
                        autocomplete={this.autocomplete}
                        onInput={() => this.handleInput()}
                        onFocus={() => this.focusInput()}
                        onBlur={() => this.blurInput()}
                        placeholder={this.placeholder}
                        disabled={this.disabled}
                        maxlength={this.maxlength}
                        value={this.value}
                        role="combobox"
                        aria-controls={this.showDropdown ? "suggestions-dropdown" : undefined}
                        aria-expanded={this.showDropdown}
                        aria-autocomplete="list"
                        aria-haspopup="listbox"
                        aria-label={this.ariaLabelText}
                        aria-labelledby={this.ariaLabelledBy}
                        aria-describedby={this.ariaDescribedBy}
                        aria-owns={this.showDropdown ? "suggestions-dropdown" : undefined}
                        aria-activedescendant={
                            this.selectedSuggestionIndex >= 0
                                ? `suggestion-${this.selectedSuggestionIndex}`
                                : undefined
                        }
                    />
                    {this.showDeleteIcon && this.showDeleteIconInternalState ? (
                        <ifx-icon
                            icon="cRemove16"
                            class="delete-icon"
                            onClick={this.handleDelete}
                            role="button"
                            tabindex="0"
                            aria-label={this.deleteIconAriaLabel}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault();
                                    this.handleDelete();
                                }
                            }}
                        ></ifx-icon>
                    ) : null}
                </label>
                {this.showDropdown && this.filteredSuggestions.length > 0 && (
                    <div
                        ref={(el) => (this.dropdownElement = el)}
                        id="suggestions-dropdown"
                        class="suggestions-dropdown"
                        role="listbox"
                        aria-label={this.dropdownAriaLabel}
                    >
                        {this.isShowingOnlyHistory() && (
                            <div class="suggestions-header">{this.historyHeaderText}</div>
                        )}
                        {this.filteredSuggestions.map((suggestion, index) => (
                            <div
                                key={suggestion.id}
                                id={`suggestion-${index}`}
                                class={this.getSuggestionClassNames(index)}
                                role="option"
                                tabIndex={0}
                                aria-selected={index === this.selectedSuggestionIndex}
                                aria-label={`${suggestion.type === "history" ? this.historyItemAriaLabel : this.suggestionAriaLabel}: ${suggestion.text}${suggestion.scope ? `, ${suggestion.scope}` : ""}${suggestion.resultCount ? `, ${suggestion.resultCount} results` : ""}`}
                                onClick={() => this.selectSuggestion(suggestion)}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter" || event.key === " ") {
                                        event.preventDefault();
                                        this.selectSuggestion(suggestion);
                                    }
                                }}
                                onMouseEnter={() => (this.selectedSuggestionIndex = index)}
                            >
                                <div class="suggestion-content">
                                    {suggestion.type === "history" && (
                                        <ifx-icon
                                            icon="history-16"
                                            class="suggestion-icon suggestion-icon--history"
                                        ></ifx-icon>
                                    )}
                                    {suggestion.type === "suggestion" && (
                                        <ifx-icon
                                            icon="search-16"
                                            class="suggestion-icon suggestion-icon--suggestion"
                                        ></ifx-icon>
                                    )}
                                    <span class="suggestion-text">
                                        <span class="suggestion-main-text">
                                            {this.renderHighlightedText(suggestion.text, this.value)}
                                        </span>
                                        {suggestion.scope && (
                                            <span class="suggestion-scope">– {suggestion.scope}</span>
                                        )}
                                    </span>
                                    {suggestion.resultCount !== undefined && suggestion.scope && (
                                        <span class="suggestion-count">{suggestion.resultCount}</span>
                                    )}
                                    {suggestion.type === "history" && (
                                        <ifx-icon
                                            icon="cross16"
                                            class="suggestion-delete-icon"
                                            role="button"
                                            tabindex="0"
                                            aria-label={`${this.historyDeleteAriaLabel}: ${suggestion.text}`}
                                            onClick={(event) => this.handleHistoryDelete(event, suggestion.text)}
                                            onKeyDown={(event) => {
                                                if (event.key === "Enter" || event.key === " ") {
                                                    event.preventDefault();
                                                    this.handleHistoryDelete(event, suggestion.text);
                                                }
                                            }}
                                        ></ifx-icon>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    private getSizeClass() {
        return `${this.size}` === "s" ? "search-field__wrapper-s" : "";
    }

    private getWrapperClassNames() {
        return classNames(
            `search-field__wrapper`,
            `${this.getSizeClass()}`,
            `${this.isFocused ? "focused" : ""}`,
            `${this.showDropdown ? "dropdown-open" : ""}`,
            `${this.disabled ? "disabled" : ""}`,
        );
    }

    private getSuggestionClassNames(index: number) {
        return classNames("suggestion-item", {
            "suggestion-item--selected": index === this.selectedSuggestionIndex,
            "suggestion-item--history": this.filteredSuggestions[index]?.type === "history",
        });
    }
}