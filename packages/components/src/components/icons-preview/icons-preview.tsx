import { icons } from "@infineon/infineon-icons";
import { Component, Element, h, State } from "@stencil/core";

@Component({
	tag: "ifx-icons-preview",
	styleUrl: "./icons-preview.scss",
	shadow: true,
})
export class IconsPreview {
	@State() iconsArray: string[] = [];
	@State() isCopied: boolean = false;
	@State() copiedIndex: number;
	@State() copiedIcon: string | null = null;
	@State() htmlTag: string = '<ifx-icon icon="calendar-16"></ifx-icon>';
	@State() iconName: string = `""`;
	@State() searchTerm: string = "";
	@Element() el;

	handleCopiedText() {
		this.isCopied = true;
		setTimeout(() => {
			this.isCopied = false;
		}, 2000);
	}

	copyIconText(icon: string) {
		this.htmlTag = `<ifx-icon icon="${icon}"></ifx-icon>`;
		this.iconName = `"${icon}"`;
		this.copiedIcon = icon;
	}

	copyHtmlString() {
		const copiedTag = `<ifx-icon icon=${this.iconName}></ifx-icon>`;
		navigator.clipboard.writeText(copiedTag);
		this.handleCopiedText();
	}

	get filteredIcons() {
		const term = this.searchTerm.toLowerCase().trim();
		if (!term) return this.iconsArray;

		return this.iconsArray.filter((icon) => icon.toLowerCase().includes(term));
	}

	getIconIndex(icon: string): number {
		return this.iconsArray.indexOf(icon);
	}

	handleIconFilter() {
		const searchField = this.el.shadowRoot.querySelector("#search__field");
		searchField.addEventListener("ifxInput", (e) => {
			this.searchTerm = e.detail;
		});
	}

	componentWillLoad() {
		this.iconsArray = Object.keys(icons);
	}

	componentDidLoad() {
		this.handleIconFilter();
	}

	render() {
		return (
			<div class="container">
				<div class="alert__wrapper">
					<ifx-notification
						icon="c-check-16"
						variant="neutral"
						link-text="Figma icon library"
						link-href="https://www.figma.com/design/yWwaLoqsWLWygDxXfvdym9/Infineon-DDS-%7C-UI-icon-library?node-id=13284-1289&p=f&t=SD6EdmXaSufsjPCv-0"
						link-target="_blank"
					>
						You can also find the UI icons in Figma for use in mockups.
					</ifx-notification>
				</div>
				<div class="snippet__wrapper">
					<div class="search__wrapper">
						<ifx-search-field
							id="search__field"
							size="m"
							show-delete-icon="true"
							value=""
							autocomplete="on"
							placeholder="Search icon"
						></ifx-search-field>
					</div>
					<div class="html-wrapper">
						<span class="html-tag">&lt;</span>
						<span class="component-name">ifx-icon</span>
						<span class="attribute-name"> icon</span>=
						<span class="attribute-value">{this.iconName}</span>
						<span class="html-tag">&gt;</span>
						<span class="html-tag">&lt;/</span>
						<span class="component-name">ifx-icon</span>
						<span class="html-tag">&gt;</span>
						<button onClick={() => this.copyHtmlString()}>
							{this.isCopied ? "Copied" : "Copy"}
						</button>
					</div>
				</div>
				<div class="preview__container">
					{this.filteredIcons.map((icon) => (
						<div
							key={icon}
							class={`preview__container-item ${
								this.isCopied && this.copiedIcon === icon ? "copied" : ""
							}`}
							onClick={() => this.copyIconText(icon)}
						>
							<ifx-icon icon={icon}></ifx-icon>
						</div>
					))}
					{this.filteredIcons.length === 0 && (
						<div class="no-results">
							No icons found matching "{this.searchTerm}"
						</div>
					)}
				</div>
			</div>
		);
	}
}
