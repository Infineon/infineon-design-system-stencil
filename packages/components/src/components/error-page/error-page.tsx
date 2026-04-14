import { Component, Host, h, Prop } from "@stencil/core";

const BASE_URL =
  "https://raw.githubusercontent.com/Infineon/public-assets/main/ifx-error-page";

@Component({
  tag: 'ifx-error-page',
  styleUrl: 'error-page.scss',
  shadow: true,
})
export class ErrorPage {
  /** Custom illustration URL for the error page graphic. */
  @Prop() readonly illustrationUrl?: string;

  /** Alternative text for the illustration. Falls back to the selected error type label. */
  @Prop() readonly alt?: string;

  /** Error page variant used to select the default content and image. Defaults to "403". */
  @Prop() readonly type: '403' | '404' | '503' | 'maintenance' = '403';

  /** Headline text for the error page. Uses the variant default when no value is provided. */
  @Prop() readonly headline?: string;

  /** Description text for the error page. Uses the variant default when no value is provided. */
  @Prop() readonly description?: string;

  /** Centralized config per error type to keep render clean and avoid conditionals in the template. */
  private readonly errorVariants = {
    '403': {
      headline: 'Access restricted',
      description:
        'Accessing this content requires special authorization. If you believe you should be able to access this content, please contact our support team for assistance.',
    },
    '404': {
      headline: 'The requested page cannot be found',
      description:
        'The page you requested does not exist. Please check the URL entered or use the navigation to find what you are looking for.',
    },
    '503': {
      headline: 'The server is currently unavailable',
      description:
        'Our service is currently experiencing high demand or undergoing maintenance. Please try again in a few moments, or contact our support team if the issue persists.',
    },
    maintenance: {
      headline: 'Planned maintenance underway',
      description:
        'We are currently performing scheduled maintenance to improve system performance and stability. Our services will be restored as soon as possible. Thank you for your patience.',
    },
  };

  render() {
    const fallbackType = this.errorVariants[this.type] ? this.type : '403';
    const variant = this.errorVariants[fallbackType];
    const imageSrc = this.illustrationUrl || `${BASE_URL}/${fallbackType}.svg`;

    const headline = this.headline || variant.headline;

    const description = this.description || variant.description;

    const type = this.type === 'maintenance' ? 'Scheduled' : 'Error';

    const alt = this.alt || `${type} ${fallbackType}`;

    return (
      <Host>
        <div class="error-page">
          <div class="error-page__image">
            <img src={imageSrc} alt={alt} />
          </div>
          <div class="error-page__description">
            <div class="error-page__type">
              {type} {fallbackType}
            </div>
            <h1 class="error-page__headline">{headline}</h1>
            <p class="error-page__body">{description}</p>
            <div class="error-page__actions">
              <slot name="button"></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
