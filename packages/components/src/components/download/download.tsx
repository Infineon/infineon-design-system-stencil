import { Component, h, Prop } from "@stencil/core";

@Component({
	tag: "ifx-download",
	styleUrl: "./download.scss",
	shadow: true,
})
export class Download {
/** Type of file to download. */
  @Prop() readonly tokens: "css" | "scss" | "json" | "js" = "css";

  render() {
    const fileMap = {
      css: "https://raw.githubusercontent.com/Infineon/public-assets/main/ifx-tokens/css-variables.css",
      scss: "https://raw.githubusercontent.com/Infineon/public-assets/main/ifx-tokens/scss-variables.scss",
      json: "https://raw.githubusercontent.com/Infineon/public-assets/main/ifx-echarts-theme/dds-echarts-theme.json",
      js: "https://raw.githubusercontent.com/Infineon/public-assets/main/ifx-echarts-theme/dds-echarts-theme.js",
    };

    const fileUrl = fileMap[this.tokens];

    const fileName =
      this.tokens === "json" || this.tokens === "js"
        ? `dds-echarts-theme.${this.tokens}`
        : `infineon-tokens.${this.tokens}`;

		return (
			<ifx-link
				onClick={(e) => {
					e.preventDefault();
					fetch(fileUrl)
						.then((res) => res.blob())
						.then((blob) => {
							const link = document.createElement("a");
							link.href = URL.createObjectURL(blob);
							link.download = fileName;
							link.click();
						});
				}}
				href={fileUrl}
				download={fileName}
				class="download__wrapper"
				size="m"
				variant="bold"
			>
				<slot />
			</ifx-link>
		);
	}
}
