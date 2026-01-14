import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Listen,
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
	metadata?: any;
}

@Component({
	tag: "ifx-search-field",
	styleUrl: "search-field.scss",
	shadow: true,
})
export class SearchField {
	@Element() el;
	private inputElement: HTMLInputElement;
	private dropdownElement: HTMLDivElement;

	@Prop({ mutable: true }) value: string = "";
	@Prop() suggestions: SuggestionItem[] = [];
	@Prop() showSuggestions: boolean = false;
	@Prop() maxSuggestions: number = 10;
	@Prop() maxHistoryItems: number = 5;
	@Prop() enableHistory: boolean = true;
	@Prop() historyKey: string = "ifx-search-history";
	@Prop() historyHeaderText: string = "Recent Searches";

	// ARIA Labels and Accessibility Props
	@Prop() ariaLabel: string | null = "Search Field";
	@Prop() ariaLabelledBy?: string | null;
	@Prop() ariaDescribedBy?: string | null;
	@Prop() deleteIconAriaLabel: string = "Clear search";
	@Prop() historyDeleteAriaLabel: string = "Remove from history";
	@Prop() dropdownAriaLabel: string = "Search suggestions and history";
	@Prop() suggestionAriaLabel: string = "Search suggestion";
	@Prop() historyItemAriaLabel: string = "Search history item";

	@Event() ifxInput: EventEmitter<string>;
	@Event() ifxSuggestionRequested: EventEmitter<string>;
	@Event() ifxSuggestionSelected: EventEmitter<SuggestionItem>;
	@Event() ifxFocus: EventEmitter<void>;
	@Event() ifxBlur: EventEmitter<void>;

	@State() showDropdown: boolean = false;
	@State() filteredSuggestions: SuggestionItem[] = [];
	@State() selectedSuggestionIndex: number = -1;
	@State() searchHistory: string[] = [];

	@Prop() showDeleteIcon: boolean = false;
	@State() showDeleteIconInternalState: boolean = false;
	@Prop() disabled: boolean = false;
	@Prop() size: string = "l";
	@State() isFocused: boolean = false;
	@Prop() placeholder: string = "Search...";
	@Prop() autocomplete: string = "off";
	@Prop() maxlength?: number = null;

	private focusEmitted: boolean = false;

	@Listen("mousedown", { target: "document" })
	handleOutsideClick(event: MouseEvent) {
		const path = event.composedPath();
		if (
			!path.includes(this.inputElement) &&
			!path.includes(this.dropdownElement)
		) {
			this.hideDropdown();
		}
	}

	@Listen("keydown")
	handleKeyDown(event: KeyboardEvent) {
		if (!this.showDropdown) return;

		switch (event.key) {
			case "ArrowDown":
				event.preventDefault();
				this.navigateSuggestions(1);
				break;
			case "ArrowUp":
				event.preventDefault();
				this.navigateSuggestions(-1);
				break;
			case "Enter":
				event.preventDefault();
				if (this.selectedSuggestionIndex >= 0) {
					this.selectSuggestion(
						this.filteredSuggestions[this.selectedSuggestionIndex],
					);
				} else {
					this.handleSearch();
				}
				break;
			case "Escape":
				this.hideDropdown();
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
	}

	handleInput = () => {
		const query = this.inputElement.value;
		this.value = query;
		this.ifxInput.emit(this.value);

		if (this.showSuggestions) {
			this.showDropdown = true;
			this.selectedSuggestionIndex = -1;
			this.requestSuggestions(query);
		}
	};

	handleDelete = () => {
		if (!this.disabled) {
			this.inputElement.value = "";
			this.value = "";
			this.ifxInput.emit(this.value);
			this.hideDropdown();
		}
	};

	handleSearch = () => {
		if (this.value.trim() && this.enableHistory) {
			// Only add to history if there are actual results
			if (this.filteredSuggestions.length > 0) {
				this.addToHistory(this.value);
			}
		}
		this.hideDropdown();
	};

	focusInput() {
		// Only emit focus event if it hasn't been emitted already
		if (!this.focusEmitted) {
			this.focusEmitted = true;
			this.isFocused = true;
			this.ifxFocus.emit();
		}

		if (this.showSuggestions) {
			// On focus without input: Show only history
			if (this.value.length === 0) {
				this.showHistoryDropdown();
				// Only show dropdown if history is actually present
				this.showDropdown = this.enableHistory && this.searchHistory.length > 0;
			} else {
				// With existing input: Normal suggestion logic
				this.updateSuggestions();
				this.showDropdown = this.filteredSuggestions.length > 0;
			}
		}
	}

	blurInput() {
		setTimeout(() => {
			this.isFocused = false;
			this.focusEmitted = false; // Reset focus flag when blur occurs
			this.ifxBlur.emit();
		}, 150);
	}

	// Public method to update history from external sources
	public loadSearchHistory() {
		if (this.enableHistory && typeof localStorage !== "undefined") {
			const stored = localStorage.getItem(this.historyKey);
			this.searchHistory = stored ? JSON.parse(stored) : [];

			// Update suggestions when history is loaded
			this.updateSuggestions();

			// If no input and no history left, close dropdown
			if (this.value.length === 0 && this.searchHistory.length === 0) {
				this.showDropdown = false;
			}
		}
	}

	// Public method to completely clear history
	public clearSearchHistory() {
		if (this.enableHistory && typeof localStorage !== "undefined") {
			// Clear from localStorage
			localStorage.removeItem(this.historyKey);

			// Clear internal history
			this.searchHistory = [];

			// Reset all dropdown-relevant states
			this.filteredSuggestions = [];
			this.selectedSuggestionIndex = -1;
			this.showDropdown = false;

			// Update suggestions after reset
			this.updateSuggestions();
		}
	}

	// Suggestion Management Methods
	private addToHistory(term: string) {
		if (!this.enableHistory || !term.trim()) return;

		const history = [...this.searchHistory];
		const existingIndex = history.indexOf(term);

		if (existingIndex > -1) {
			history.splice(existingIndex, 1);
		}

		history.unshift(term);
		// Limit history to maxHistoryItems (default 5)
		this.searchHistory = history.slice(0, this.maxHistoryItems);

		if (typeof localStorage !== "undefined") {
			localStorage.setItem(this.historyKey, JSON.stringify(this.searchHistory));
		}
	}

	// Remove individual history entry
	private removeFromHistory(term: string) {
		if (!this.enableHistory) return;

		const history = [...this.searchHistory];
		const index = history.indexOf(term);

		if (index > -1) {
			history.splice(index, 1);
			this.searchHistory = history;

			// Update localStorage
			if (typeof localStorage !== "undefined") {
				localStorage.setItem(
					this.historyKey,
					JSON.stringify(this.searchHistory),
				);
			}

			// Update suggestions after removal
			this.updateSuggestions();

			// Close dropdown if no history remains
			if (this.searchHistory.length === 0 && this.value.length === 0) {
				this.showDropdown = false;
			}
		}
	}

	// Handle click on history delete button
	private handleHistoryDelete = (event: Event, term: string) => {
		event.stopPropagation(); // Prevent selection of the entry
		this.removeFromHistory(term);
	};

	private requestSuggestions(query: string) {
		this.ifxSuggestionRequested.emit(query);
		this.updateSuggestions();
	}

	private updateSuggestions() {
		const query = this.value.toLowerCase();
		let suggestions: SuggestionItem[] = [];

		if (query.length > 0) {
			// For text input: Mix external suggestions and relevant history

			// 1. Filter external suggestions
			if (this.suggestions && this.suggestions.length > 0) {
				const filteredExternal = this.suggestions.filter((s) =>
					s.text.toLowerCase().includes(query),
				);
				suggestions = [...suggestions, ...filteredExternal];
			}

			// 2. Filter relevant history entries
			if (this.enableHistory && this.searchHistory.length > 0) {
				const filteredHistory = this.searchHistory
					.filter((term) => term.toLowerCase().includes(query))
					.map((term, index) => ({
						id: `history-${index}`,
						text: term,
						type: "history" as const,
					}));
				suggestions = [...suggestions, ...filteredHistory];
			}

			// 3. Sort by relevance (exact matches first, then prefix matches)
			suggestions.sort((a, b) => {
				const aText = a.text.toLowerCase();
				const bText = b.text.toLowerCase();

				// Exact match has highest priority
				if (aText === query && bText !== query) return -1;
				if (bText === query && aText !== query) return 1;

				// Prefix match has second highest priority
				const aStartsWith = aText.startsWith(query);
				const bStartsWith = bText.startsWith(query);

				if (aStartsWith && !bStartsWith) return -1;
				if (bStartsWith && !aStartsWith) return 1;

				// With equal relevance: external suggestions before history
				if (a.type === "suggestion" && b.type === "history") return -1;
				if (a.type === "history" && b.type === "suggestion") return 1;

				// Alphabetical sorting as last criterion
				return aText.localeCompare(bText);
			});
		} else {
			// For empty query: Show only history (no external suggestions)
			if (this.enableHistory && this.searchHistory.length > 0) {
				const historySuggestions = this.searchHistory.map((term, index) => ({
					id: `history-${index}`,
					text: term,
					type: "history" as const,
				}));

				suggestions = historySuggestions;
			}
			// For empty query DO NOT show external suggestions
		}

		// Remove duplicates based on text and scope combination (history takes precedence over external)
		const uniqueSuggestions = suggestions.reduce(
			(unique: SuggestionItem[], current) => {
				const existingIndex = unique.findIndex(
					(item) =>
						item.text.toLowerCase() === current.text.toLowerCase() &&
						item.scope === current.scope,
				);
				if (existingIndex === -1) {
					unique.push(current);
				} else {
					// If already exists, prefer history over external suggestions
					if (
						current.type === "history" &&
						unique[existingIndex].type !== "history"
					) {
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
		this.inputElement.value = suggestion.text;
		this.ifxSuggestionSelected.emit(suggestion);
		this.ifxInput.emit(this.value);

		if (this.enableHistory) {
			// Always add selected suggestions to history since they are valid results
			this.addToHistory(suggestion.text);
		}

		this.hideDropdown();
	}

	private hideDropdown() {
		this.showDropdown = false;
		this.selectedSuggestionIndex = -1;
		this.isFocused = false;
	}

	// Show only history in dropdown (e.g. on focus without input)
	private showHistoryDropdown() {
		if (this.enableHistory && this.searchHistory.length > 0) {
			// Show only history entries
			const historySuggestions = this.searchHistory.map((term, index) => ({
				id: `history-${index}`,
				text: term,
				type: "history" as const,
			}));

			this.filteredSuggestions = historySuggestions.slice(
				0,
				this.maxSuggestions,
			);
			this.selectedSuggestionIndex = -1;
		} else {
			this.filteredSuggestions = [];
		}
	}

	// Check if only history entries are displayed (without text input)
	private isShowingOnlyHistory(): boolean {
		return (
			this.value.length === 0 &&
			this.filteredSuggestions.length > 0 &&
			this.filteredSuggestions.every((s) => s.type === "history")
		);
	}

	// Render text with highlighted matches
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
			<div
				aria-disabled={this.disabled}
				aria-value={this.value}
				class="search-field"
			>
				<div
					class={this.getWrapperClassNames()}
					tabindex={1}
					onClick={() => this.focusInput()}
				>
					<ifx-icon icon="search-16" class="search-icon"></ifx-icon>
					<input
						ref={(el) => (this.inputElement = el)}
						type="text"
						autocomplete={this.autocomplete}
						onInput={() => this.handleInput()}
						onFocus={() => this.focusInput()}
						onBlur={() => this.blurInput()}
						placeholder={this.placeholder}
						disabled={this.disabled}
						maxlength={this.maxlength}
						value={this.value}
						role="combobox"
						aria-controls={
							this.showDropdown ? "suggestions-dropdown" : undefined
						}
						aria-expanded={this.showDropdown}
						aria-autocomplete="list"
						aria-haspopup="listbox"
						aria-label={this.ariaLabel}
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
				</div>

				{/* Suggestions Dropdown */}
				{this.showDropdown && this.filteredSuggestions.length > 0 && (
					<div
						ref={(el) => (this.dropdownElement = el)}
						id="suggestions-dropdown"
						class="suggestions-dropdown"
						role="listbox"
						aria-label={this.dropdownAriaLabel}
					>
						{/* History Header - only show when exclusively showing history entries */}
						{this.isShowingOnlyHistory() && (
							<div class="suggestions-header">{this.historyHeaderText}</div>
						)}

						{this.filteredSuggestions.map((suggestion, index) => (
							<div
								key={suggestion.id}
								id={`suggestion-${index}`}
								class={this.getSuggestionClassNames(index)}
								role="option"
								aria-selected={index === this.selectedSuggestionIndex}
								aria-label={`${suggestion.type === "history" ? this.historyItemAriaLabel : this.suggestionAriaLabel}: ${suggestion.text}${suggestion.scope ? `, ${suggestion.scope}` : ""}${suggestion.resultCount ? `, ${suggestion.resultCount} results` : ""}`}
								onClick={() => this.selectSuggestion(suggestion)}
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
										<span class="suggestion-count">
											{suggestion.resultCount}
										</span>
									)}

									{/* Delete Button only for history entries */}
									{suggestion.type === "history" && (
										<ifx-icon
											icon="cross16"
											class="suggestion-delete-icon"
											role="button"
											tabindex="0"
											aria-label={`${this.historyDeleteAriaLabel}: ${suggestion.text}`}
											onClick={(event) =>
												this.handleHistoryDelete(event, suggestion.text)
											}
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

	getSizeClass() {
		return `${this.size}` === "s" ? "search-field__wrapper-s" : "";
	}

	getWrapperClassNames() {
		return classNames(
			`search-field__wrapper`,
			`search-field__wrapper ${this.getSizeClass()}`,
			`${this.isFocused ? "focused" : ""}`,
			`${this.showDropdown ? "dropdown-open" : ""}`,
			`${this.disabled ? "disabled" : ""}`,
		);
	}

	getSuggestionClassNames(index: number) {
		return classNames("suggestion-item", {
			"suggestion-item--selected": index === this.selectedSuggestionIndex,
			"suggestion-item--history":
				this.filteredSuggestions[index]?.type === "history",
		});
	}
}
