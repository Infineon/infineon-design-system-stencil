import { Component, Host, h, Prop } from "@stencil/core";

const BASE_URL =
  "https://raw.githubusercontent.com/Infineon/public-assets/main/ifx-error-page";

@Component({
  tag: "ifx-error-page",
  styleUrl: "error-page.scss",
  shadow: true,
})
export class ErrorPage {
  // Custom illustration URL for the error page graphic.
  @Prop() readonly illustrationUrl?: string;

  // Alternative text for the illustration. Falls back to the selected error type label.
  @Prop() readonly alt?: string;

  // Error page variant used to select the default content and image. Defaults to "403".
  @Prop() readonly type: "403" | "404" | "503" | "maintenance" = "403";

  // Headline text for the error page. Uses the variant default when no value is provided.
  @Prop() readonly headline?: string;

  // Description text for the error page. Uses the variant default when no value is provided.
  @Prop() readonly description?: string;

  // centralized config per error type to keep render clean and avoid conditionals in the template
  private errorVariants = {
    "403": {
      headline: "Access restricted",
      description:
        "Accessing this content requires special authorization. If you believe you should be able to access this content, please contact our support team for assistance.",
      primaryLabel: "Go to homepage",
      secondaryLabel: "Get support",
    },
    "404": {
      headline: "The requested page cannot be found",
      description:
        "The page you requested does not exist. Please check the URL entered or use the navigation to find what you are looking for.",
      primaryLabel: "Go to homepage",
      secondaryLabel: "Get support",
    },
    "503": {
      headline: "The server is currently unavailable",
      description:
        "Our service is currently experiencing high demand or undergoing maintenance. Please try again in a few moments, or contact our support team if the issue persists.",
      primaryLabel: "Try again",
      secondaryLabel: "Get support",
    },
    maintenance: {
      headline: "Planned maintenance underway",
      description:
        "We are currently performing scheduled maintenance to improve system performance and stability. Our services will be restored as soon as possible. Thank you for your patience.",
      primaryLabel: "Check status",
      secondaryLabel: "Get support",
    },
  };

  render() {
    const variant = this.errorVariants[this.type];

    const imageSrc = this.illustrationUrl || `${BASE_URL}/${this.type}.svg`;

    const headline = this.headline || variant.headline;

    const description = this.description || variant.description;

    const type = this.type === "maintenance" ? "Schedule" : "Error";

    const alt = this.alt || `${type} ${this.type}`;

    return (
      <Host>
        <div class="error-page__wrapper">
          <div class="error-page__image">
            <img src={imageSrc} alt={alt} />
          </div>
          <div class="error-page__description">
            <div class="error-page__type">
              {type} {this.type}
            </div>
            <h1 class="error-page__headline">{headline}</h1>
            <p class="error-page__body">{description}</p>
            <div class="error-page__actions">
              <slot name="button">
                <div class="error-page__button-wrapper">
                  <ifx-button full-width="true" variant="primary">
                    {variant.primaryLabel}
                  </ifx-button>
                </div>
                <div class="error-page__button-wrapper">
                  <ifx-button full-width="true" variant="secondary">
                    {variant.secondaryLabel}
                  </ifx-button>
                </div>
              </slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
