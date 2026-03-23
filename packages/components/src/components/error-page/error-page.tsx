import { Component, Host, h, Prop } from '@stencil/core';
import { getAssetPath } from '@stencil/core';

@Component({
  tag: 'ifx-error-page',
  styleUrl: 'error-page.scss',
  shadow: true,
  assetsDirs: ["assets"]
})
export class ErrorPage {
  @Prop() readonly illustrationUrl?: string;
  @Prop() readonly alt?: string;
  @Prop() readonly type!: "error 403" | "error 404" | "error 503" | "schedule maintenance";
  @Prop() readonly headline!: string;
  @Prop() readonly description!: string;

  render() {
const defaultImage = getAssetPath(`./assets/error/${this.type.replace(" ", "-").toLowerCase()}.svg`);

	const illustration = this.illustrationUrl || defaultImage

    return (
      <Host>
        <div class="error-page__wrapper">
          <div class="error-page__image">
            <img src={illustration} alt={this.alt || this.type}/>
          </div>
          <div class="error-page__description">
            <div class="error-page__type">
              {this.type}
            </div>
            <h1 class="error-page__headline">
              {this.headline}
            </h1>
            <p class="error-page__body">
              {this.description}
            </p>
            <div class="error-page__actions">
              <div class="button-wrapper">
                <ifx-button variant="primary">Go to homepage</ifx-button>
              </div>
              <div class="button-wrapper">
		            <ifx-button variant="secondary">Get support</ifx-button>
              </div>
              <slot/>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
