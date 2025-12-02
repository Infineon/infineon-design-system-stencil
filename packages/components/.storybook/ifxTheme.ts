import type { ThemeVars } from "storybook/theming";
import { create } from "storybook/theming/create";
import logo from "../src/storybook/assets/ifx-logo.png";

const ifxColors = {
	baseBlack: "#1D1D1D",
	baseWhite: "#FFFFFF",
	engineering100: "#F7F7F7",
	engineering200: "#EEEDED",
	engineering300: "#BFBBBB",
	engineering400: "#8D8786",
	engineering500: "#575352",
	engineering600: "#3C3A39",
	ocean100: "#DFF4F3",
	ocean200: "#B8DEDA",
	ocean300: "#6CB4AD",
	ocean400: "#3B9B91",
	ocean500: "#0A8276",
	ocean600: "#08665C",
	ocean700: "#06534B",
	red500: "#CD002F",
	red600: "#BF0023",
	red700: "#900021",
	orange500: "#E16B25",
	green500: "#4CA460",
	lawn400: "#B9D257",
	lawn500: "#9BBA43",
	lawn700: "#3C6C0F",
	berry400: "#BE3283",
	berry500: "#9C216E",
	sun400: "#FF9737",
	sun500: "#F97414",
	sand400: "#FBE273",
	sand500: "#FCD442",
};

const themeVars: ThemeVars = {
	base: "light",
	// Typography
	fontBase: '"Source Sans 3", sans-serif',
	fontCode: "monospace",

	brandTitle: "Infineon Technologies AG",
	brandImage: logo,
	brandTarget: "_self",

	// Main Colors

	colorPrimary: ifxColors.ocean500,
	colorSecondary: ifxColors.ocean500,
	// colorSecondary is selected color for sidebar. Hover color is derived from it.

	// UI
	appBg: ifxColors.baseWhite,
	appContentBg: ifxColors.baseWhite,
	appPreviewBg: ifxColors.baseWhite,
	appBorderColor: ifxColors.engineering200,
	appBorderRadius: 1,

	// Text colors
	textColor: ifxColors.baseBlack,
	textInverseColor: ifxColors.baseWhite,
	textMutedColor: ifxColors.engineering500,

	// Toolbar default and active colors
	barTextColor: ifxColors.ocean500,
	barSelectedColor: ifxColors.ocean700,
	barHoverColor: ifxColors.ocean600,
	barBg: ifxColors.baseWhite,

	// Form colors
	inputBg: ifxColors.baseWhite,
	inputBorder: ifxColors.engineering200,
	inputTextColor: ifxColors.baseBlack,
	inputBorderRadius: 1,

	// Switch
	booleanBg: ifxColors.engineering100,
	booleanSelectedBg: ifxColors.baseWhite,

	// Buttons ("Set string")
	buttonBg: ifxColors.engineering100,
	buttonBorder: ifxColors.engineering200,
};

export default create(themeVars);
