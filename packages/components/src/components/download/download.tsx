import { Component, h, Prop } from "@stencil/core";
@Component({
  tag: "ifx-download",
  styleUrl: "./download.scss",
  shadow: true,
})
export class Download {
  /** Type of file to download. */
  @Prop() readonly fileType: "css" | "scss" | "json" | "js" = "css";
	
  private readonly fileMap = {
    css: "https://raw.githubusercontent.com/Infineon/public-assets/main/ifx-tokens/css-variables.css",
    scss: "https://raw.githubusercontent.com/Infineon/public-assets/main/ifx-tokens/scss-variables.scss",
    json: "https://raw.githubusercontent.com/Infineon/public-assets/main/ifx-echarts-theme/dds-echarts-theme.json",
    js: "https://raw.githubusercontent.com/Infineon/public-assets/main/ifx-echarts-theme/dds-echarts-theme.js",
  };

  private get fileName(): string {
    return this.fileType === "json" || this.fileType === "js"
      ? `dds-echarts-theme.${this.fileType}`
      : `infineon-tokens.${this.fileType}`;
  }

  render() {
    const fileUrl = this.fileMap[this.fileType];
    return (
      <ifx-link
        onClick={(e) => {
          e.preventDefault();
          fetch(fileUrl)
            .then((res) => res.blob())
            .then((blob) => {
              const link = document.createElement("a");
              link.href = URL.createObjectURL(blob);
              link.download = this.fileName;
              link.click();
            });
        }}
        href={fileUrl}
        download={this.fileName}
        class="download__wrapper"
        size="m"
        variant="bold"
      >
        <slot />
      </ifx-link>
    );
  }
}