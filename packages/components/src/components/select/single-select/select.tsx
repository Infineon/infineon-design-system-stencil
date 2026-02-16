import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Method,
	Prop,
	State,
} from "@stencil/core";
import { type HTMLStencilElement, Listen, Watch } from "@stencil/core/internal";
import { isNestedInIfxComponent } from "../../../shared/utils/dom-utils";
import { detectFramework } from "../../../shared/utils/framework-detection";
import { trackComponent } from "../../../shared/utils/tracking";

let ChoicesJs: any;

import type ChoicesType from "choices.js";

import type {
	AddItemTextFn,
	AjaxFn,
	ClassNames,
	CustomAddItemText,
	FuseOptions,
	IChoicesMethods,
	IChoicesProps,
	ItemFilterFn,
	MaxItemTextFn,
	NoChoicesTextFn,
	NoResultsTextFn,
	OnCreateTemplates,
	OnInit,
	SortFn,
	UniqueItemText,
	ValueCompareFunction,
} from "./interfaces";

import { filterObject, isDefined, isJSONParseable } from "./utils";

@Component({
	tag: "ifx-select",
	styleUrl: "select.scss",
	// shadow: true, //with shadow dom enabled, styles to the external choicesJs library cant be applied.
})
export class Choices implements IChoicesProps, IChoicesMethods {
	@Prop() public value: string;
	@Prop() public name: string;
	@Prop() public items: Array<any>;
	@Prop() public choices: Array<any> | string = undefined;
	@Prop() public renderChoiceLimit: number;
	@Prop() public maxItemCount: number;
	@Prop() public addItems: boolean;
	@Prop() public removeItems: boolean;
	@Prop() public removeItemButton: boolean;
	@Prop() public editItems: boolean;
	@Prop() public duplicateItemsAllowed: boolean;
	@Prop() public delimiter: string;
	@Prop() public paste: boolean;
	@Prop() public showSearch: boolean;
	@Prop() public searchChoices: boolean;
	@Prop() public searchFields: Array<string> | string;
	@Prop() public searchFloor: number;
	@Prop() public searchResultLimit: number;
	@Prop() public position: "auto" | "top" | "bottom";
	@Prop() public resetScrollPosition: boolean;
	@Prop() public shouldSort: boolean;
	@Prop() public shouldSortItems: boolean;
	@Prop() public sorter: SortFn;
	@Prop() public placeholder: boolean | string;
	@Prop() public searchPlaceholderValue: string;
	@Prop() public prependValue: string;
	@Prop() public appendValue: string;
	@Prop() public renderSelectedChoices: "always" | "auto";
	@Prop() public loadingText: string;
	@Prop() public noResultsText: string | NoResultsTextFn;
	@Prop() public noChoicesText: string | NoChoicesTextFn;
	@Prop() public itemSelectText: "";
	@Prop() public addItemText: string | AddItemTextFn;
	@Prop() public maxItemText: string | MaxItemTextFn;
	@Prop() public uniqueItemText: UniqueItemText;
	@Prop() public classNames: ClassNames;
	@Prop() public fuseOptions: FuseOptions;
	@Prop() public addItemFilter: string | RegExp | ItemFilterFn;
	@Prop() public customAddItemText: CustomAddItemText;
	@Prop() public callbackOnInit: OnInit;
	@Prop() public callbackOnCreateTemplates: OnCreateTemplates;
	@Prop() public valueComparer: ValueCompareFunction;
	//custom ifx props
	@Prop() error: boolean = false;
	@Prop() label: string = "";
	@Prop() caption: string = "";
	@Prop() disabled: boolean = false;
	@Prop() required: boolean = false;
	@Prop() placeholderValue: string = "Placeholder";
	@Event() ifxSelect: EventEmitter<CustomEvent>;
	@Event() ifxInput: EventEmitter<CustomEvent>;
	@Prop({ mutable: true }) options: any[] | string;
	@Prop() size: string = "medium (40px)";
	@State() selectedOption: any | null = null;
	@State() optionIsSelected: boolean = false;
	@Prop() showClearButton: boolean = true;

	private resizeObserver: ResizeObserver;
	private previousOptions: any[] = [];

	@Element() private readonly root: HTMLElement;
	private choice;
	private element;

	@Watch("disabled")
	watchDisabled(newValue: boolean) {
		if (newValue && !this.error) {
			this.choice.disable();
		} else {
			this.choice.enable();
		}
	}

	@Method()
	async clearSelection() {
		if (!this.disabled) {
			this.clearInput();
			this.clearSelectField();
			this.setPreSelected(null);
			this.closeDropdown();
			this.optionIsSelected = false;
		}
	}

	clearSelectField() {
		this.selectedOption = null;
		this.ifxSelect.emit(null);
	}

	@Method()
	async handleChange() {
		this.ifxSelect.emit(this.choice.getValue());
		this.selectedOption = this.choice.getValue(); //store the selected option to reflect it in the template function
		this.setPreSelected(this.selectedOption.value); //set previously selected items from the input array to false and the new selection to true
		this.closeDropdown();
	}

	@Method()
	public async highlightItem(item: HTMLElement, runEvent?: boolean) {
		this.choice.highlightItem(item, runEvent);

		return this;
	}

	@Method()
	public async unhighlightItem(item: HTMLElement) {
		this.choice.unhighlightItem(item);

		return this;
	}

	@Method()
	public async highlightAll() {
		this.choice.highlightAll();

		return this;
	}

	@Method()
	public async unhighlightAll() {
		this.choice.unhighlightAll();

		return this;
	}

	@Method()
	public async removeActiveItemsByValue(value: string) {
		this.choice.removeActiveItemsByValue(value);
		return this;
	}

	@Method()
	public async removeActiveItems(excludedId?: number) {
		this.choice.removeActiveItems(excludedId);

		return this;
	}

	@Method()
	public async removeHighlightedItems(runEvent?: boolean) {
		this.choice.removeHighlightedItems(runEvent);

		return this;
	}

	@Method()
	public async showDropdown(focusInput?: boolean) {
		this.choice.showDropdown(focusInput);
		return this;
	}

	@Method()
	public async hideDropdown(blurInput?: boolean) {
		this.choice.hideDropdown(blurInput);

		return this;
	}

	@Method()
	public async getValue(valueOnly?: boolean): Promise<string | Array<string>> {
		return this.choice.getValue(valueOnly);
	}

	@Method()
	public async setValue(args: Array<any>) {
		this.choice.setValue(args);

		return this;
	}

	@Method()
	public async setChoiceByValue(value: string | Array<string>) {
		this.choice.setChoiceByValue(value);

		return this;
	}

	@Method()
	public async setChoices(
		choices: any[] | string,
		value: string,
		label: string,
		replaceChoices?: boolean,
	) {
		let listOfChoices;
		if (typeof choices === "string") {
			try {
				if (!isJSONParseable(choices)) {
					//meaning the input string comes from storybook as a non valid json string to be displayed in a beautified version on storybook
					choices = choices
						.replace(/'/g, '"')
						.replace(/"false"/g, "false")
						.replace(/"true"/g, "true");
				}
				listOfChoices = [...JSON.parse(choices)];
			} catch (err) {
				console.error("Failed to parse choices:", err);
			}
		} else if (Array.isArray(choices) || typeof choices === "object") {
			listOfChoices = [...choices];
		} else {
			console.error("Unexpected value for choices:", this.options);
		}

		this.choice.setChoices(listOfChoices, value, label, replaceChoices);
		return this;
	}

	@Method()
	public async clearChoices() {
		this.choice.clearChoices();

		return this;
	}

	@Method()
	public async clearStore() {
		this.choice.clearStore();

		return this;
	}

	@Method()
	public async clearInput() {
		this.choice.clearInput();

		return this;
	}

	@Method()
	public async ajax(fn: AjaxFn) {
		this.choice.ajax(fn);

		return this;
	}

	@Method()
	async handleDeleteIcon() {
		const width = this.root.offsetWidth;
		const deleteIconWrapper = this.root.querySelector(
			".ifx-choices__icon-wrapper-delete",
		);
		if (deleteIconWrapper) {
			if (width <= 180) {
				deleteIconWrapper.classList.add("hide");
			} else if (this.showClearButton) {
				deleteIconWrapper.classList.remove("hide");
			}
		}
	}

	private async ensureChoicesLoaded(): Promise<boolean> {
		if (typeof window === "undefined" || typeof document === "undefined") {
			return false;
		}
		if (!ChoicesJs) {
			const mod = await import("choices.js");
			ChoicesJs = (mod as any).default ?? (mod as any);
		}
		return true;
	}

	handleCloseButton() {
		if (typeof this.options === "string") {
			const optionsToArray = JSON.parse(this.options);
			const optionIsSelected = optionsToArray.find(
				(option) => option.selected === true,
			);
			if (optionIsSelected) {
				this.optionIsSelected = true;
			} else {
				this.optionIsSelected = false;
			}
		} else if (this.options && Array.isArray(this.options)) {
			const optionIsSelected = this.options.find(
				(option) => option.selected === true,
			);
			if (optionIsSelected) {
				this.optionIsSelected = true;
			} else {
				this.optionIsSelected = false;
			}
		}
	}

	protected componentWillLoad() {
		this.handleCloseButton();
	}

	protected componentWillUpdate() {
		this.handleCloseButton();
		this.previousOptions = [...this.options];
		const optionsAreEqual = this.isEqual(this.options, this.previousOptions);
		if (this.options && !optionsAreEqual) {
			this.clearSelectField();
		}
	}

	isEqual(a: any, b: any[]) {
		return JSON.stringify(a) === JSON.stringify(b);
	}

	addResizeObserver() {
		this.resizeObserver = new ResizeObserver(() => {
			this.handleDeleteIcon();
		});

		const componentWrapper = this.root.querySelector(".ifx-choices__wrapper");
		this.resizeObserver.observe(componentWrapper);
	}

	protected async componentDidLoad() {
		this.init();
		if (!isNestedInIfxComponent(this.root)) {
			const framework = detectFramework();
			trackComponent("ifx-select", await framework);
		}
		this.addEventListenersToHandleCustomFocusAndActiveState();
		this.handleDeleteIcon();
		this.addResizeObserver();
	}

	protected componentDidUpdate() {
		this.init();
		this.handleDeleteIcon();
	}

	protected disconnectedCallback() {
		this.destroy();

		if (this.resizeObserver) {
			this.resizeObserver.disconnect();
			this.resizeObserver = null;
		}
	}

	private handleWrapperClick(event: MouseEvent) {
		const target = event.target as HTMLElement;
		const isSearchInput =
			target.classList.contains("choices__input") ||
			target.closest(".choices__input");
		const isDropdownItem = target.closest(
			".choices__list--dropdown .choices__item",
		);

		// Only toggle dropdown if clicking on wrapper itself
		if (!isSearchInput && !isDropdownItem) {
			this.toggleDropdown();
		}
	}

	protected render(): any {
		const attributes = {
			"data-selector": "root",
			name: this.name || null,
			// 'remove-item-button': false,
		};
		const choicesWrapperClass = `ifx-choices__wrapper ${this.getSizeClass()}`;

		// destroy choices element to restore previous dom structure
		// so vdom can replace the element correctly
		this.destroy();

		return (
			<div class={`ifx-select-container`}>
				{this.label ? (
					<div
						class={`ifx-label-wrapper ${this.disabled && !this.error ? "disabled" : ""}`}
					>
						<span>{this.label}</span>
						{this.required && (
							<span class={`required ${this.error ? "error" : ""}`}>*</span>
						)}
					</div>
				) : null}
				<div
					class={`${choicesWrapperClass} 
            ${this.disabled && !this.error ? "disabled" : ""} 
            ${this.error ? "error" : ""}`}
					onClick={
						this.disabled && !this.error
							? undefined
							: (e) => this.handleWrapperClick(e)
					}
					onKeyDown={(event) => this.handleKeyDown(event)}
				>
					<select
						class="single__select-input-field"
						disabled={this.disabled && !this.error}
						{...attributes}
						data-trigger
						onChange={() => this.handleChange()}
					>
						{this.createSelectOptions(this.options)}
					</select>

					<div class="single__select-icon-container">
						{this.optionIsSelected && (
							<div
								class={`ifx-choices__icon-wrapper-delete ${!this.showClearButton ? "hide" : ""}`}
							>
								<ifx-icon
									icon="cRemove16"
									onClick={() => this.clearSelection()}
								></ifx-icon>
							</div>
						)}
						<div class="ifx-choices__icon-wrapper-up">
							<ifx-icon key="icon-up" icon="chevron-up-16"></ifx-icon>
						</div>
						<div class="ifx-choices__icon-wrapper-down">
							<ifx-icon key="icon-down" icon="chevron-down-16"></ifx-icon>
						</div>
					</div>
				</div>
				{this.caption && (
					<div
						class={`single__select-caption ${this.error ? "error" : ""} ${this.disabled && !this.error ? "disabled" : ""}`}
					>
						{this.caption}
					</div>
				)}
			</div>
		);
	}

	toggleDropdown() {
		const div = this.root.querySelector(
			".ifx-choices__wrapper",
		) as HTMLDivElement;
		if (div.classList.contains("active") || this.choice.dropdown.isActive) {
			this.closeDropdown();
		} else {
			this.choice.showDropdown();
			div.classList.add("active");
		}
		const choicesElement = this.root.querySelector(".choices");
		choicesElement.classList.add("is-focused"); // Add the 'is-focused' class, cause a click on the wrapper (and not the embedded select element) doesnt add this automatically to the choices instance
	}

	closeDropdown() {
		this.hideDropdown();
		const wrapper = this.root.querySelector(
			".ifx-choices__wrapper",
		) as HTMLDivElement;
		wrapper.focus();
		wrapper.classList.remove("active");
	}

	@Listen("mousedown", { target: "document" })
	handleOutsideClick(event: MouseEvent) {
		const path = event.composedPath();
		const ifxChoicesContainer = this.root.querySelector(
			".ifx-choices__wrapper",
		) as HTMLDivElement;

		if (!path.includes(this.root)) {
			ifxChoicesContainer.classList.remove("active");
		}
	}

	handleKeyDown(event: KeyboardEvent) {
		if (this.disabled) {
			return;
		}

		const isSearchInput = (event.target as HTMLElement).classList.contains(
			"choices__input",
		);
		const isClearButton = (event.target as HTMLElement).classList.contains(
			"ifx-choices__icon-wrapper-delete",
		);

		switch (event.code) {
			case "Enter": {
				if (isClearButton) {
					this.clearSelection();
				} else {
					this.toggleDropdown();
				}
				break;
			}
			case "Space": {
				if (!isSearchInput) {
					this.toggleDropdown();
				}
				break;
			}
			case "Tab": {
				if (isSearchInput) {
					event.preventDefault();
					this.closeDropdown();
				}
				break;
			}
		}
	}

	getSizeClass() {
		return `${this.size}` === "s" ? "small-select" : "medium-select";
	}

	private async init() {
		const ok = await this.ensureChoicesLoaded();
		if (!ok) return;

		const props = {
			allowHTML: true,
			items: this.items,
			choices: this.choices,
			renderChoiceLimit: this.renderChoiceLimit,
			maxItemCount: this.maxItemCount,
			addItems: this.addItems,
			removeItems: this.removeItems,
			removeItemButton: this.removeItemButton,
			editItems: this.editItems,
			duplicateItemsAllowed: this.duplicateItemsAllowed,
			delimiter: this.delimiter,
			paste: this.paste,
			searchEnabled: this.showSearch,
			searchChoices: this.searchChoices,
			searchFields: this.searchFields,
			searchFloor: this.searchFloor,
			searchResultLimit: this.searchResultLimit,
			position: this.position,
			resetScrollPosition: this.resetScrollPosition,
			shouldSort: false, // choices/groups will appear in the order they were given.
			shouldSortItems: this.shouldSortItems,
			sorter: this.sorter,
			placeholder: this.placeholder,
			searchPlaceholderValue: this.searchPlaceholderValue,
			prependValue: this.prependValue,
			appendValue: this.appendValue,
			renderSelectedChoices: this.renderSelectedChoices,
			loadingText: this.loadingText,
			noResultsText: this.noResultsText,
			noChoicesText: this.noChoicesText,
			itemSelectText: this.itemSelectText,
			addItemText: this.addItemText,
			maxItemText: this.maxItemText,
			uniqueItemText: this.uniqueItemText,
			classNames: this.classNames,
			fuseOptions: this.fuseOptions,
			callbackOnInit: this.callbackOnInit,
			callbackOnCreateTemplates: this.callbackOnCreateTemplates,
			valueComparer: this.valueComparer,
			addItemFilter: this.addItemFilter,
			customAddItemText: this.customAddItemText,
		};

		const settings = filterObject(props, isDefined);

		//type check
		const element = this.root.querySelector('[data-selector="root"]');
		if (
			element instanceof HTMLInputElement ||
			element instanceof HTMLSelectElement
		) {
			// this.choice = new ChoicesJs(element, settings); //standard, without using custom templates
			const self = this; // save the context of this in a variable outside of the function to access it in the following

			this.choice = new ChoicesJs(
				element,
				Object.assign({}, settings, {
					callbackOnCreateTemplates: function (template) {
						return {
							//modifying the selected item template
							item: ({ classNames }, data) => {
								const removeButtonHTML = "";

								if (data.placeholder && !self.selectedOption?.value) {
									// For placeholders, use data-id="placeholder"
									return template(`
                  <div class="choices__placeholder" data-item data-id="${data.id}" data-value="${data.value}" ${data.disabled && !this.error ? 'aria-disabled="true"' : ""}>
                    ${data.label === undefined ? this.placeholderValue : data.label}
                    ${removeButtonHTML}
                  </div>
                `);
								} else {
									// For non-placeholder items, use the actual data ID
									return template(`
                <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable}" 
                      data-item 
                      data-id="${self.selectedOption?.id !== undefined ? self.selectedOption?.id : self.choice.getValue().id}" 
                      data-value="${self.selectedOption?.value !== undefined ? self.selectedOption?.value : self.choice.getValue().value}" 
                      ${data.disabled && !this.error ? 'aria-disabled="true"' : ""}>
                  <span>${self.selectedOption?.label !== undefined ? self.selectedOption?.label : self.choice.getValue().label}</span>
                  <!-- Add your remove button here if needed -->
                </div>
              `);
								}
							},
							input: ({ classNames }) => {
								return template(`
                  <input 
                    type="search"
                    class="${classNames.input} ${classNames.inputCloned} ${self.getSizeClass()}"
                    autocomplete="off"
                    autocapitalize="off"
                    spellcheck="false"
                    role="textbox"
                    aria-autocomplete="list"
                    aria-label="${this.showSearch ? this.searchPlaceholderValue : ""}">`);
							},

							//modifying the template of each item in the options list
							choice: ({ classNames }, data) => {
								return template(`
              <div class="${classNames.item} ${classNames.itemChoice} ${self.getSizeClass()} 
              ${data.selected || self.selectedOption?.value === data.value || self.getPreSelected(self)?.value === data.value ? "selected" : ""} 
              ${data.placeholder ? classNames.placeholder : ""} 
              ${data.disabled && !this.error ? classNames.itemDisabled : classNames.itemSelectable} 
                    role="${data.groupId && data.groupId > 0 ? "treeitem" : "option"}"
                    data-choice ${data.disabled && !this.error ? 'data-choice-disabled aria-disabled="true"' : "data-choice-selectable"}                     data-id="${data.id}"
                    data-value="${data.value}"
                    data-select-text="${this.config.itemSelectText}">
                <span>${data.label}</span>
                ${data.selected || self.selectedOption?.value === data.value || self.getPreSelected(self)?.value === data.value ? '<ifx-icon icon="check16"></ifx-icon>' : ""}
              </div>
            `);
							},
						};
					},
				}),
			);

			//set select options
			this.setChoices(this.options, "value", "label", true);
			//set custom event listener to listen for search input
			self.addSearchEventListener(self, this.choice);
		} else {
			// handle the case when the element is neither an HTMLInputElement nor an HTMLSelectElement
		}
	}

	private addEventListenersToHandleCustomFocusAndActiveState() {
		const div = this.root.querySelector(
			".ifx-choices__wrapper",
		) as HTMLDivElement;

		if (!div) {
			console.error(".ifx-choices__wrapper not found");
			return;
		}

		div.tabIndex = 0;

		div.addEventListener("focus", function () {
			if (!this.classList.contains("disabled")) {
				this.classList.add("focus");
			}
		});

		div.addEventListener("blur", function () {
			this.classList.remove("focus");
		});
	}

	private addSearchEventListener(self, choiceElement: ChoicesType) {
		choiceElement.passedElement.element.addEventListener(
			"search",
			(event: CustomEvent) => {
				self.ifxInput.emit(event.detail.value);
			},
			false,
		);
		return choiceElement;
	}

	private destroy() {
		if (this.element) {
			this.element = null;
		}

		if (this.choice) {
			this.choice.destroy();
			this.choice = null;
		}
	}

	//get selected values from input array
	private getPreSelected(self) {
		const optionsArray: any[] = Array.isArray(self.options)
			? self.options
			: JSON.parse(self.options);
		return optionsArray.find((option) => option.selected === true) || null;
	}

	//set previously marked as selected items in the input array to unselected and select new ones
	private setPreSelected(newValue) {
		const optionsArray: any[] = Array.isArray(this.options)
			? this.options
			: JSON.parse(this.options);

		this.options = optionsArray.map((obj) => {
			return {
				...obj,
				selected: obj.value === newValue,
			};
		});
	}

	//setting the value that gets displayed in the select at component start (either the value prop or a placeholder)
	private createSelectOptions(ifxOptions): Array<HTMLStencilElement> {
		if (this.value !== "undefined" || this.selectedOption?.value !== "") {
			let options;
			if (isJSONParseable(ifxOptions)) {
				options = [...JSON.parse(ifxOptions)];
			} else if (Array.isArray(ifxOptions) || typeof ifxOptions === "object") {
				options = [...ifxOptions];
			}
			const optionValueBasedOnAvailableOptions = options?.find(
				(option) => option.value === this.value || this.selectedOption?.value,
			);

			if (optionValueBasedOnAvailableOptions) {
				return [
					<option value={optionValueBasedOnAvailableOptions.value}>
						{optionValueBasedOnAvailableOptions.label}
					</option>,
				];
			}
		}

		// Assign a unique id for the placeholder
		return this.placeholder !== "false"
			? [<option value="">{this.placeholderValue}</option>]
			: [<option value=""></option>];
	}
}
