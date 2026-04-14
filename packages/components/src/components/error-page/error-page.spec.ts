import { newSpecPage } from "jest-stencil-runner";
import { ErrorPage } from "./error-page";

const BASE_URL =
  "https://raw.githubusercontent.com/Infineon/public-assets/main/ifx-error-page";

describe("ifx-error-page", () => {
  it("renders default 404 content", async () => {
    const { root } = await newSpecPage({
      components: [ErrorPage],
      html: `<ifx-error-page type="404"></ifx-error-page>`,
    });

    expect(root).toBeTruthy();
    expect(root!.shadowRoot!.querySelector(".error-page")).toBeTruthy();
    expect(root!.shadowRoot!.querySelector(".error-page__type")?.textContent?.trim()).toBe(
      "Error 404"
    );
    expect(root!.shadowRoot!.querySelector(".error-page__headline")?.textContent?.trim()).toBe(
      "The requested page cannot be found"
    );
    expect(root!.shadowRoot!.querySelector(".error-page__body")?.textContent?.trim()).toBe(
      "The page you requested does not exist. Please check the URL entered or use the navigation to find what you are looking for."
    );
  });

  it("renders default 403 content", async () => {
    const { root } = await newSpecPage({
      components: [ErrorPage],
      html: `<ifx-error-page type="403"></ifx-error-page>`,
    });

    expect(root!.shadowRoot!.querySelector(".error-page__type")?.textContent?.trim()).toBe(
      "Error 403"
    );
    expect(root!.shadowRoot!.querySelector(".error-page__headline")?.textContent?.trim()).toBe(
      "Access restricted"
    );
    expect(root!.shadowRoot!.querySelector(".error-page__body")?.textContent?.trim()).toBe(
      "Accessing this content requires special authorization. If you believe you should be able to access this content, please contact our support team for assistance."
    );
  });

  it("renders default 503 content", async () => {
    const { root } = await newSpecPage({
      components: [ErrorPage],
      html: `<ifx-error-page type="503"></ifx-error-page>`,
    });

    expect(root!.shadowRoot!.querySelector(".error-page__type")?.textContent?.trim()).toBe(
      "Error 503"
    );
    expect(root!.shadowRoot!.querySelector(".error-page__headline")?.textContent?.trim()).toBe(
      "The server is currently unavailable"
    );
    expect(root!.shadowRoot!.querySelector(".error-page__body")?.textContent?.trim()).toBe(
      "Our service is currently experiencing high demand or undergoing maintenance. Please try again in a few moments, or contact our support team if the issue persists."
    );
  });

  it("renders maintenance defaults", async () => {
    const { root } = await newSpecPage({
      components: [ErrorPage],
      html: `<ifx-error-page type="maintenance"></ifx-error-page>`,
    });

    expect(root!.shadowRoot!.querySelector(".error-page__type")?.textContent?.trim()).toBe(
      "Scheduled maintenance"
    );
    expect(root!.shadowRoot!.querySelector(".error-page__headline")?.textContent?.trim()).toBe(
      "Planned maintenance underway"
    );
    expect(root!.shadowRoot!.querySelector(".error-page__body")?.textContent?.trim()).toBe(
      "We are currently performing scheduled maintenance to improve system performance and stability. Our services will be restored as soon as possible. Thank you for your patience."
    );
  });

  it("uses custom headline and description when provided", async () => {
    const { root } = await newSpecPage({
      components: [ErrorPage],
      html: `<ifx-error-page type="403" headline="Custom headline" description="Custom description"></ifx-error-page>`,
    });

    expect(root!.shadowRoot!.querySelector(".error-page__headline")?.textContent?.trim()).toBe(
      "Custom headline"
    );
    expect(root!.shadowRoot!.querySelector(".error-page__body")?.textContent?.trim()).toBe(
      "Custom description"
    );
  });

  it("uses default and custom image attributes", async () => {
    const defaultPage = await newSpecPage({
      components: [ErrorPage],
      html: `<ifx-error-page type="503"></ifx-error-page>`,
    });

    const defaultImage = defaultPage.root!.shadowRoot!.querySelector("img");

    expect(defaultImage?.getAttribute("src")).toBe(`${BASE_URL}/503.svg`);
    expect(defaultImage?.getAttribute("alt")).toBe("Error 503");

    const customPage = await newSpecPage({
      components: [ErrorPage],
      html: `<ifx-error-page type="403" illustration-url="https://example.com/error.svg" alt="Custom alt"></ifx-error-page>`,
    });

    const customImage = customPage.root!.shadowRoot!.querySelector("img");

    expect(customImage?.getAttribute("src")).toBe("https://example.com/error.svg");
    expect(customImage?.getAttribute("alt")).toBe("Custom alt");
  });

  it("uses correct default alt text for maintenance type", async () => {
    const { root } = await newSpecPage({
      components: [ErrorPage],
      html: `<ifx-error-page type="maintenance"></ifx-error-page>`,
    });

    const image = root!.shadowRoot!.querySelector("img");
    expect(image?.getAttribute("src")).toBe(`${BASE_URL}/maintenance.svg`);
    expect(image?.getAttribute("alt")).toBe("Scheduled maintenance");
  });

  it("renders the named button slot", async () => {
    const { root } = await newSpecPage({
      components: [ErrorPage],
      html: `<ifx-error-page type="403"></ifx-error-page>`,
    });

    const slot = root!.shadowRoot!.querySelector('slot[name="button"]');
    expect(slot).toBeTruthy();
  });

  it("replaces fallback buttons when a buttons slot is provided", async () => {
    const { root } = await newSpecPage({
      components: [ErrorPage],
      html: `
        <ifx-error-page type="404">
          <button slot="button">Custom action</button>
        </ifx-error-page>
      `,
    });

    expect(root!.querySelector('[slot="button"]')?.textContent?.trim()).toBe(
      "Custom action"
    );
  });
});
