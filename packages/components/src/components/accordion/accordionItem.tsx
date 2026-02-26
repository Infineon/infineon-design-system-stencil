//ifxAccordionItem
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

@Component({
	tag: "ifx-accordion-item",
	styleUrl: "accordionItem.scss",
	shadow: true,
})
export class AccordionItem {
	@Element() el: HTMLIfxAccordionItemElement;
	/** The caption of the accordion item. */
	@Prop() readonly caption: string;
	/** Set the open attribute to open the accordion item. */
	@Prop({ mutable: true, }) open: boolean = false;
	/** The aria-level attribute for the accordion item header. */
	@Prop() readonly headingLevel = 3;
	/** The icon to be displayed in the accordion item header. */
	@Prop() readonly icon: string = "";
	@State() internalOpen: boolean = false;
	/** Set the mutable attribute to allow or not allow the accordion item to be opened and closed. */
	@Event() ifxOpen: EventEmitter;
	/** Event emitted when an accordion item is closed. */
	@Event() ifxClose: EventEmitter;
	private contentEl!: HTMLElement;
	private titleEl!: HTMLElement;
	private resizeObserver!: ResizeObserver;

	componentWillLoad() {
		this.internalOpen = this.open;
	}

	componentDidLoad() {
		this.checkSlotContent();
		this.openAccordionItem();
		this.contentEl = this.el.shadowRoot.querySelector("#accordion-content");
		if (this.contentEl) {
			this.attachResizeObserver();
		}
	}

	componentDidUpdate() {
		this.checkSlotContent();
		this.openAccordionItem();
	}

	@Watch("open")
	openChanged(newValue: boolean) {
		this.internalOpen = newValue;
	}

	private toggleOpen() {
		this.internalOpen = !this.internalOpen;
		this.open = this.internalOpen;

		if (this.internalOpen) {
			this.ifxOpen.emit({ isOpen: this.internalOpen });
		} else {
			this.ifxClose.emit({ isClosed: !this.internalOpen });
		}
	}

	private openAccordionItem() {
		if (this.internalOpen) {
			this.contentEl.style.height = `${this.contentEl.scrollHeight}px`;
			this.contentEl.style.overflow = "hidden";
		} else {
			this.contentEl.style.height = "0";
			this.contentEl.style.overflow = "hidden";
		}
	}

	private getInnerContentWrapper() {
		const innerContentEl = this.el.shadowRoot.querySelector(".inner-content");
		return innerContentEl;
	}

	private attachResizeObserver() {
		const innerContentEl = this.getInnerContentWrapper();

		if (innerContentEl) {
			this.resizeObserver = new ResizeObserver(() => {
				if (this.internalOpen) {
					this.openAccordionItem();
				}
			});

			this.resizeObserver.observe(innerContentEl);
		}
	}

	@Listen("keydown")
	handleKeydown(ev: KeyboardEvent) {
		const path = ev.composedPath();

		if (!path.includes(this.titleEl)) {
			return;
		}

		switch (ev.key) {
			case "Enter": // fallthrough
			case " ": // space
				ev.preventDefault();
				this.toggleOpen();
				break;
		}
	}

	private checkSlotContent() {
		const slot = this.el.shadowRoot.querySelector("slot") as HTMLSlotElement;
		const hasContent = slot.assignedNodes().length > 0;
		const innerContent = this.getInnerContentWrapper();
		if (!hasContent) {
			innerContent.classList.add("no-content");
		} else if (innerContent.classList.contains("no-content")) {
			innerContent.classList.remove("no-content");
		}
	}

	render() {
		return (
			<div class={`accordion-item ${this.internalOpen ? "open" : ""}`}>
				<div
					role="button"
					aria-expanded={this.internalOpen}
					aria-controls="accordion-content"
					class="accordion-title"
					onClick={() => this.toggleOpen()}
					tabindex="0"
					ref={(el) => (this.titleEl = el as HTMLElement)}
				>
					{this.icon ? ( 
					<div class="with-icon">
					 <span
						aria-hidden="true"
						role="heading"
						aria-level={String(this.headingLevel) as string}
						class="accordion-icon"
					 >
					   <ifx-icon icon="chevron-down-16" />
					 </span>
					 <span class="with-icon-caption">
					   <ifx-icon icon={this.icon} />
					   <span id="accordion-caption" class="accordion-caption">
						{this.caption}
					   </span>
					 </span>
					</div>
					) : (
					<div class="no-icon">
					 <span
						aria-hidden="true"
						role="heading"
						aria-level={String(this.headingLevel) as string}
						class="accordion-icon"
					 >
						<ifx-icon icon="chevron-down-16" />
					 </span>
					 <span id="accordion-caption" class="accordion-caption">
						{this.caption}
					 </span>
					</div>
					)}
				</div>
				<div
					id="accordion-content"
					class="accordion-content"
					ref={(el) => (this.contentEl = el as HTMLElement)}
					role="region"
					aria-labelledby="accordion-caption"
				>
					<div class="inner-content">
						<slot />
					</div>
				</div>
			</div>
		);
	}
}
