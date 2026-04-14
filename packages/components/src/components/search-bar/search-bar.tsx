import {
	Component,
	Element,
	Event,
	type EventEmitter,
	h,
	Method,
	Prop,
	State,
	Watch,
} from "@stencil/core";
import { isNestedInIfxComponent } from "../..//shared/utils/dom-utils";
import { detectFramework } from "../..//shared/utils/framework-detection";
import { trackComponent } from "../../shared/utils/tracking";

@Component({
	tag: "ifx-search-bar",
	styleUrl: "search-bar.scss",
	shadow: true,
})
export class SearchBar {
	@Element() el: HTMLIfxSearchBarElement;

	/**
	 * Controls whether the search bar is expanded (open) or collapsed.
	 * This is mirrored into internal state and drives the visible UI.
	 */
	@Prop() readonly isOpen: boolean = true;

	/**
	 * Disables user interaction with the search field and close control.
	 */
	@Prop() readonly disabled: boolean = false;

	/**
	 * Current input value of the search field.
	 * This is updated when the field emits input events.
	 */
	@Prop({ mutable: true }) value: string;

	/**
	 * Maximum allowed length for the search input.
	 */
	@Prop() readonly maxlength?: number;
	
	/**
	 * Autocomplete behavior passed to the underlying search field.
	 */
	@Prop() readonly autocomplete: string = "on";

	/**
	 * Toggles the close button outside the input field
	 */
	@Prop() readonly showCloseButton: boolean = true;

	/**
	 * Emits when the search input value changes.
	 */
	@Event() ifxInput: EventEmitter;

	/**
	 * Emits when the search bar is opened or closed.
	 * Payload is the new open state.
	 */
	@Event() ifxOpen: EventEmitter;

	@State() internalState: boolean;

	/**
	 * Opens the search bar when triggered programatically
	 * Emits `ifxOpen` with `false` and updates internal state.
	 */
	@Method()
	public async open() {
		this.internalState = true;
	}

	/**
	* Closes the search bar when triggered programatically
	* Emits `ifxOpen` with `true` and updates internal state.
	*/
	@Method()
	public async close() {
		this.internalState = false;
		this.ifxOpen.emit(false);
	}

	@Watch("isOpen")
	handlePropChange() {
		this.internalState = this.isOpen;
	}

	private handleCloseButton = () => {
		this.internalState = !this.internalState;
		this.ifxOpen.emit(this.internalState);
	};

	private setInitialState() {
		this.internalState = this.isOpen;
	}

	componentWillLoad() {
		this.setInitialState();
		//this.ifxOpen.emit(this.internalState);
	}

	async componentDidLoad() {
		if (!isNestedInIfxComponent(this.el)) {
			const framework = detectFramework();
			trackComponent("ifx-search-bar", await framework);
		}
	}

	private handleInput(event: CustomEvent) {
		this.value = event.detail;
	}

	render() {
		return (
			<div
				role="search"
				aria-label="a search field for user input"
				aria-disabled={this.disabled}
				class={`search-bar ${this.internalState ? "open" : "closed"}`}
			>
				{this.internalState ? (
					<div class="search-bar-wrapper">
						<ifx-search-field
							autocomplete={this.autocomplete}
							disabled={this.disabled}
							value={this.value}
							maxlength={this.maxlength}
							onIfxInput={this.handleInput.bind(this)}
						>
							<ifx-icon icon="search-16" slot="search-icon"></ifx-icon>
						</ifx-search-field>

					{this.showCloseButton &&
						<a
							aria-label="Close button"
							href="javascript:void(0)"
							onClick={this.handleCloseButton}
						>
							Close
						</a>}
					</div>
				) : (
					<div class="search-bar__icon-wrapper" onClick={this.handleCloseButton}>
						<ifx-icon icon="search-16"></ifx-icon>
					</div>
				)}
			</div>
		);
	}
}
