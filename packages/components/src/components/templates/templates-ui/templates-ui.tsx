import { Component, Element, getAssetPath, h, Listen } from "@stencil/core";

@Component({
	tag: "ifx-templates-ui",
	styleUrl: "templates-ui.scss",
	shadow: true,
	assetsDirs: ["assets"],
})
export class TemplatesUI {
	@Element() el: HTMLElement;

	private tableTemplate = getAssetPath(
		`https://raw.githubusercontent.com/Infineon/public-assets/refs/heads/main/table_template.png`,
	);
	private wizardTemplate = getAssetPath(
		`https://raw.githubusercontent.com/Infineon/public-assets/refs/heads/main/wizard_template.png`,
	);

	toggleTemplate(currTemp) {
		const templates = this.el.shadowRoot
			.querySelector(".templates__wrapper")
			.querySelectorAll("ifx-template");
		templates.forEach((template) => {
			template.toggleTemplate(currTemp);
		});
	}

	@Listen("fieldError")
	handleError(e) {
		const alertWrapper = this.el.shadowRoot.querySelector(".alert__wrapper");
		if (e.detail) {
			alertWrapper.classList.add("show");
		} else {
			alertWrapper.classList.remove("show");
		}
	}

	@Listen("toggleTemplates")
	filterTemplates(e) {
		const title = this.el.shadowRoot.querySelector(".templates__title");
		const backBtn = this.el.shadowRoot.querySelector(".back__btn-wrapper");
		if (e.detail) {
			title.classList.add("hide");
			if (e.detail !== "details") {
				backBtn.classList.add("show");
			}
			this.toggleTemplate(e.detail);
		} else {
			title.classList.remove("hide");
			backBtn.classList.remove("show");
			this.toggleTemplate(null);
		}
	}

	closeAlert() {
		const alertWrapper = this.el.shadowRoot.querySelector(".alert__wrapper");
		alertWrapper.classList.remove("show");
	}

	render() {
		return (
			<div class="templates__container">
				<div class="back__btn-wrapper">
					<ifx-icon-button
						onClick={() => this.filterTemplates(false)}
						shape="round"
						variant="tertiary"
						icon="arrow-left-16"
						target="_blank"
						size="m"
					/>
					<div class="alert__wrapper">
						<ifx-alert
							onClick={() => this.closeAlert()}
							aria-live="assertive"
							variant="danger"
							icon="c-info-16"
						>
							All fields are mandatory
						</ifx-alert>
					</div>
				</div>
				<h2 class="templates__title">Choose your template</h2>
				<div class="templates__wrapper">
					<ifx-template name="template-01" thumbnail={this.tableTemplate} />
					<ifx-template name="template-02" thumbnail={this.wizardTemplate} />
				</div>
			</div>
		);
	}
}
