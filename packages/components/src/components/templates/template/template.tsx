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

@Component({
	tag: "ifx-template",
	styleUrl: "template.scss",
	shadow: true,
})
export class Template {
	@Element() el: HTMLElement;
	@State() repoDetails: { name: string; desc: string; framework: string } = {
		name: "",
		desc: "",
		framework: "",
	};
	@State() repoUrl: string;
	@State() showDetails: boolean = false;
	@State() isTemplatePage: boolean = false;
	@State() isLoading: boolean = true;
	@State() repoError: string;
	@Prop() name: string;
	@Event() toggleTemplates: EventEmitter;
	@Event() fieldError: EventEmitter;
	@Prop() thumbnail: string;

	private clientId = "Ov23lixmXiNTTNb6V5W6";
	private redirectUri =
		"https://infineon.github.io/infineon-design-system-stencil/?path=/docs/dds-templates--development";
	private scope = "repo workflow";
	private state = "template123";

	authUser() {
		const authorizationUrl =
			`https://github.com/login/oauth/authorize?` +
			`client_id=${this.clientId}&` +
			`redirect_uri=${this.redirectUri}&` +
			`scope=${this.scope}&` +
			`state=${this.state}`;

		window.open(authorizationUrl, "_blank");
	}

	componentDidLoad() {
		const url = new URL(window.location.href);
		const code = url.searchParams.get("code");
		const { templateName } = this.getLocalStorageValues();
		if (code && this.name === templateName) {
			this.isTemplatePage = true;
			this.toggleTemplates.emit("details");
			this.getUserToken(code);
		}
	}

	getLocalStorageValues() {
		const repoName = localStorage.getItem("repo_name");
		const repoDesc = localStorage.getItem("repo_desc");
		const repoFramework = localStorage.getItem("repo_framework");
		const templateName = localStorage.getItem("selectedTemplate");
		return { repoName, repoDesc, repoFramework, templateName };
	}

	async getUserToken(authCode) {
		const { repoName, repoDesc, repoFramework, templateName } =
			this.getLocalStorageValues();

		fetch(
			`https://ddstemplate-srv.cfapps.eu10-004.hana.ondemand.com/token/${authCode}/${repoName}/${repoDesc}/${repoFramework}/${templateName}`,
		)
			.then((response) => {
				if (response.ok) {
					return response.text();
				} else {
					return response.text().then((errorMessage) => {
						throw new Error(errorMessage);
					});
				}
			})
			.then((data) => {
				if (data) {
					this.isLoading = false;
					this.repoUrl = data;
					localStorage.clear();
				}
			})
			.catch((error) => {
				this.repoError = error.message;
				console.error("Error:", error.message);
			});
	}

	handleUserInput(e, type) {
		if (type === "name") {
			this.repoDetails = { ...this.repoDetails, name: e.target.value };
		} else if (type === "desc") {
			this.repoDetails = { ...this.repoDetails, desc: e.target.value };
		} else if (type === "framework") {
			this.repoDetails = { ...this.repoDetails, framework: e.target.value };
		}
	}

	submitUserData() {
		if (
			this.repoDetails.name &&
			this.repoDetails.desc &&
			this.repoDetails.framework
		) {
			localStorage.setItem("repo_name", this.repoDetails.name);
			localStorage.setItem("repo_desc", this.repoDetails.desc);
			localStorage.setItem("repo_framework", this.repoDetails.framework);
			localStorage.setItem("selectedTemplate", this.name);
			this.fieldError.emit(false);
			this.authUser();
		} else {
			this.fieldError.emit("All fields are mandatory");
		}
	}

	togglePadding(action) {
		let parent = this.el.parentElement;
		if (parent) {
			const rootNode = parent.getRootNode();
			if (rootNode instanceof ShadowRoot) {
				parent = rootNode.host.parentElement;
			} else {
				parent = parent.parentElement;
			}
			if (action === "remove") {
				parent.parentElement.style.padding = "0px";
			} else if (action === "add") {
				parent.parentElement.style.padding = "4rem 20px";
			}
		}
	}

	handleCurrentTemplate(e) {
		if (e && !this.showDetails) {
			this.togglePadding("remove");
			const targetTemplate = e.currentTarget;
			this.toggleTemplates.emit(targetTemplate);
			this.showDetails = true;
		}
	}

	@Method()
	async toggleTemplate(currTemp) {
		const templateWrapper = this.el.shadowRoot.querySelector(
			".react__template-wrapper",
		);
		if (templateWrapper) {
			if (!templateWrapper.classList.contains("hide") && currTemp) {
				if (templateWrapper !== currTemp) {
					templateWrapper.classList.add("hide");
				}
			} else {
				if (this.showDetails) {
					this.showDetails = false;
				}
				this.togglePadding("add");
				templateWrapper.classList.remove("hide");
			}
		}
	}

	render() {
		return (
			<div>
				{this.isTemplatePage ? (
					<div class="template__page-wrapper">
						{!this.repoUrl && !this.repoError && (
							<div>
								<h3>Your repository is getting ready..</h3>
								<p>This will only take a minute.</p>
							</div>
						)}
						{this.isLoading && !this.repoError && (
							<div>
								<ifx-spinner variant="default" size="s" />
							</div>
						)}
						{this.repoUrl && (
							<ifx-link
								href={this.repoUrl}
								target="_parent"
								size="m"
								variant="underlined"
							>
								Your repository
							</ifx-link>
						)}
						{this.repoError && <div>{this.repoError}</div>}
					</div>
				) : (
					<div class="react__template-container">
						<div
							class="react__template-wrapper"
							onClick={(e) => this.handleCurrentTemplate(e)}
						>
							<div class="image__wrapper">
								<img src={this.thumbnail} />
							</div>
						</div>
						{this.showDetails && (
							<div class="details__wrapper">
								<div class="selection__buttons-wrapper">
									<div class="selection__input">
										<input
											type="radio"
											id="react"
											name="chosen_framework"
											value="react"
											onInput={(e) => this.handleUserInput(e, "framework")}
										/>
										<label htmlFor="react">React</label>
									</div>
									<div class="selection__input vue">
										<input
											class="vue__input"
											disabled
											type="radio"
											id="vue"
											name="chosen_framework"
											value="vue"
											onInput={(e) => this.handleUserInput(e, "framework")}
										/>
										<label class="vue__label" htmlFor="vue">
											Vue
										</label>{" "}
										(Soon)
									</div>
								</div>

								<div class="input__fields-wrapper">
									<ifx-text-field
										required={true}
										onInput={(e) => this.handleUserInput(e, "name")}
										size="m"
										icon="c-info-16"
										placeholder="Your repository name"
									>
										Repository Name
									</ifx-text-field>

									<ifx-text-field
										required={true}
										size="m"
										icon="c-info-16"
										onInput={(e) => this.handleUserInput(e, "desc")}
										placeholder="Your repository description"
									>
										Repository Description
									</ifx-text-field>

									<ifx-button
										fullWidth={true}
										onClick={() => this.submitUserData()}
										variant="primary"
									>
										Generate template
									</ifx-button>
								</div>
							</div>
						)}
					</div>
				)}
			</div>
		);
	}
}
