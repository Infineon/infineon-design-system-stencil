import type { StorybookConfig } from "@storybook/web-components-vite";
import remarkGfm from "remark-gfm";

import packageJson from "../package.json" with { type: "json" };

function getLibraryVersion(): string {
	return packageJson.version;
}

const config: StorybookConfig = {
	stories: [
		"../src/components/**/*.mdx",
		"../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
		"../src/storybook/stories/**/*.mdx",
	],
	tags: {
		hidden: {
			excludeFromSidebar: true,
		}
	},
	addons: [
		{
			name: "@storybook/addon-docs",
			options: {
				mdxPluginOptions: { mdxCompileOptions: { remarkPlugins: [remarkGfm] } },
			},
		},
		"@storybook/addon-a11y",
	],
	docs: {
		defaultName: "Development",
	},
	framework: {
		name: "@storybook/web-components-vite",
		options: {},
	},
	staticDirs: ["../src/storybook/public"],
	previewHead: (head) => {
		const isCI = process.env.CI === "true";
		const scriptSrc = isCI
			? `https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil@${getLibraryVersion()}/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js`
			: "../www/build/infineon-design-system-stencil.esm.js";
		const cssSrc = isCI
			? `https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil@${getLibraryVersion()}/dist/infineon-design-system-stencil/infineon-design-system-stencil.css`
			: "../www/build/infineon-design-system-stencil.css";

		return `
    ${head}
    <script type="module" src="${scriptSrc}"></script>
    <link rel="stylesheet" type="text/css" href="${cssSrc}" media="all">
  `;
	},
	managerHead: (head) => `
    ${head}
    <style>
      .sidebar-header > div > a {
          	display: flex;
          	flex-direction: column;
			align-items: start;
      }
      .sidebar-header > div > a::after {
          	content: 'Version ${getLibraryVersion()}';
          	margin: 20px 0 0 0;
          	color: #0A8276;
          	font-size: 18px;
          	font-weight: bold;
      }
    </style>
  `,
	async viteFinal(config) {
        const { mergeConfig } = await import("vite");
        return mergeConfig(config, {
            base: "./",
            server: {
                ...config.server,
                watch: {
                    ...config.server?.watch,
                    // Watch the Stencil build output for changes
                    ignored: ['!**/dist/**'],
                    usePolling: true,
                    interval: 300,
                },
                headers: {
                    // Prevent browser caching of Stencil build artifacts
                    'Cache-Control': 'no-store, no-cache, must-revalidate',
                }
            },
            optimizeDeps: {
                ...config.optimizeDeps,
                exclude: [...(config.optimizeDeps?.exclude || []), '@infineon/infineon-design-system-stencil'],
                force: true,
            }
        });
    },
};
export default config;
