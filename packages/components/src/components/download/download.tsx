import { Component, h, Prop } from "@stencil/core";

@Component({
	tag: "ifx-download",
	styleUrl: "./download.scss",
	shadow: true,
})
export class Download {
	@Prop() tokens: "css" | "scss" = "css";

	render() {
		const fileMap = {
			css: "css-variables.css",
			scss: "scss-variables.scss",
		};

		const fileName = `infineon-tokens.${this.tokens}`;
		const sourceFile = fileMap[this.tokens];

		const fileUrl = `https://raw.githubusercontent.com/Infineon/public-assets/main/ifx-tokens/${sourceFile}`;

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
