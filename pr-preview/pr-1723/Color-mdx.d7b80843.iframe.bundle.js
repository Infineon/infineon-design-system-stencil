(self.webpackChunk_infineon_infineon_design_system_stencil=self.webpackChunk_infineon_infineon_design_system_stencil||[]).push([[2494],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"../../node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"../../node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/stories/foundations/Color.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");const black_namespaceObject=__webpack_require__.p+"static/media/black.d1b81636.png",white_namespaceObject=__webpack_require__.p+"static/media/white.84dcd97a.png",transparent_namespaceObject=__webpack_require__.p+"static/media/transparent.756d5bc6.png",engineering_100_namespaceObject=__webpack_require__.p+"static/media/engineering-100.7b3ac621.png",engineering_200_namespaceObject=__webpack_require__.p+"static/media/engineering-200.53f9a5f6.png",engineering_300_namespaceObject=__webpack_require__.p+"static/media/engineering-300.c4f2e9a0.png",engineering_400_namespaceObject=__webpack_require__.p+"static/media/engineering-400.e8b12d46.png",engineering_500_namespaceObject=__webpack_require__.p+"static/media/engineering-500.e0deb601.png",engineering_600_namespaceObject=__webpack_require__.p+"static/media/engineering-600.2dc66f3a.png",ocean_100_namespaceObject=__webpack_require__.p+"static/media/ocean-100.b1625033.png",ocean_200_namespaceObject=__webpack_require__.p+"static/media/ocean-200.8bf83a80.png",ocean_300_namespaceObject=__webpack_require__.p+"static/media/ocean-300.21d090e1.png",ocean_400_namespaceObject=__webpack_require__.p+"static/media/ocean-400.66d0884d.png",ocean_500_namespaceObject=__webpack_require__.p+"static/media/ocean-500.2a847aa4.png",ocean_600_namespaceObject=__webpack_require__.p+"static/media/ocean-600.76320a15.png",ocean_700_namespaceObject=__webpack_require__.p+"static/media/ocean-700.b09491c0.png",red_500_namespaceObject=__webpack_require__.p+"static/media/red-500.492e9585.png",red_600_namespaceObject=__webpack_require__.p+"static/media/red-600.72b23cd2.png",red_700_namespaceObject=__webpack_require__.p+"static/media/red-700.40833b9a.png",orange_500_namespaceObject=__webpack_require__.p+"static/media/orange-500.933b23f5.png",green_500_namespaceObject=__webpack_require__.p+"static/media/green-500.9868f8a4.png",lawn_400_namespaceObject=__webpack_require__.p+"static/media/lawn-400.19480830.png",lawn_500_namespaceObject=__webpack_require__.p+"static/media/lawn-500.ae636bbe.png",lawn_700_namespaceObject=__webpack_require__.p+"static/media/lawn-700.fd4aa75b.png",berry_400_namespaceObject=__webpack_require__.p+"static/media/berry-400.1ed7c98e.png",berry_500_namespaceObject=__webpack_require__.p+"static/media/berry-500.6325b77a.png",sun_400_namespaceObject=__webpack_require__.p+"static/media/sun-400.3d2d1959.png",sun_500_namespaceObject=__webpack_require__.p+"static/media/sun-500.3c4d5390.png",sand_400_namespaceObject=__webpack_require__.p+"static/media/sand-400.21cf2107.png",sand_500_namespaceObject=__webpack_require__.p+"static/media/sand-500.22df0478.png",overlay_dark_namespaceObject=__webpack_require__.p+"static/media/overlay-dark.6964722a.png",overlay_light_namespaceObject=__webpack_require__.p+"static/media/overlay-light.6bc66dcf.png";function _createMdxContent(props){const _components={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Foundations/Colors"}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"color",children:"Color"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Our UI color palette plays a critical role in our design system. It helps to establish our visual identity and creates a consistent look and feel across all applications"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"tokens",children:"Tokens"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"We use the concept of tokens to apply color in a consistent, reusable, and scalable way across applications. They help us abstract how we use color from the values themselves."}),"\n",(0,jsx_runtime.jsxs)(_components.table,{children:[(0,jsx_runtime.jsx)(_components.thead,{children:(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.th,{children:"token"}),(0,jsx_runtime.jsx)(_components.th,{children:"hex"}),(0,jsx_runtime.jsx)(_components.th,{children:"example"})]})}),(0,jsx_runtime.jsxs)(_components.tbody,{children:[(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorBaseBlack"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#1D1D1D"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:black_namespaceObject,alt:"Base Black",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorBaseWhite"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#FFFFFF"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:white_namespaceObject,alt:"Base White",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorBaseTransparent"})}),(0,jsx_runtime.jsx)(_components.td,{children:"transparent"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:transparent_namespaceObject,alt:"Base Transparent",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorEngineering100"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#F7F7F7"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:engineering_100_namespaceObject,alt:"Engineering 100",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorEngineering200"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#EEEDED"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:engineering_200_namespaceObject,alt:"Engineering 200",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorEngineering300"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#BFBBBB"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:engineering_300_namespaceObject,alt:"Engineering 300",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorEngineering400"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#8D8786"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:engineering_400_namespaceObject,alt:"Engineering 400",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorEngineering500"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#575352"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:engineering_500_namespaceObject,alt:"Engineering 500",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorEngineering600"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#3C3A39"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:engineering_600_namespaceObject,alt:"Engineering 600",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorOcean100"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#DFF4F3"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:ocean_100_namespaceObject,alt:"Ocean 100",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorOcean200"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#B8DEDA"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:ocean_200_namespaceObject,alt:"Ocean 200",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorOcean300"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#6CB4AD"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:ocean_300_namespaceObject,alt:"Ocean 300",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorOcean400"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#3B9B91"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:ocean_400_namespaceObject,alt:"Ocean 400",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorOcean500"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#0A8276"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:ocean_500_namespaceObject,alt:"Ocean 500",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorOcean600"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#08665C"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:ocean_600_namespaceObject,alt:"Ocean 600",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorOcean700"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#06534B"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:ocean_700_namespaceObject,alt:"Ocean 700",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorRed500"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#CD002F"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:red_500_namespaceObject,alt:"Red 500",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorRed600"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#BF0023"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:red_600_namespaceObject,alt:"Red 600",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorRed700"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#900021"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:red_700_namespaceObject,alt:"Red 700",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorOrange500"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#E16B25"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:orange_500_namespaceObject,alt:"Orange 500",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorGreen500"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#4CA460"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:green_500_namespaceObject,alt:"Green 500",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorLawn400"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#B9D257"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:lawn_400_namespaceObject,alt:"Lawn 400",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorLawn500"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#9BBA43"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:lawn_500_namespaceObject,alt:"Lawn 500",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorLawn700"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#3C6C0F"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:lawn_700_namespaceObject,alt:"Lawn 700",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorBerry400"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#BE3283"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:berry_400_namespaceObject,alt:"Berry 400",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorBerry500"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#9C216E"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:berry_500_namespaceObject,alt:"Berry 500",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorSun400"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#FF9737"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:sun_400_namespaceObject,alt:"Sun 400",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorSun500"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#F97414"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:sun_500_namespaceObject,alt:"Sun 500",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorSand400"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#FBE273"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:sand_400_namespaceObject,alt:"Sand 400",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorSand500"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#FCD442"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:sand_500_namespaceObject,alt:"Sand 500",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorOverlayDark"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#1D1D1D (20%)"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:overlay_dark_namespaceObject,alt:"Overlay Dark",width:"50%"})})]}),(0,jsx_runtime.jsxs)(_components.tr,{children:[(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("code",{children:"$ifxColorOverlayLight"})}),(0,jsx_runtime.jsx)(_components.td,{children:"#FFFFFF (20%)"}),(0,jsx_runtime.jsx)(_components.td,{children:(0,jsx_runtime.jsx)("img",{src:overlay_light_namespaceObject,alt:"Overlay Light",width:"50%"})})]})]})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"using-tokens",children:"Using tokens"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"background-colors",children:"Background colors"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Our overall look should be light and bright. To achieve that we use:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorBaseWhite"}),": This is our main background color."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorEngineering-100"}),": If it is necessary to apply more section-structure. Especially for dashboard designs."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorOcean-500"}),": This option is only recommended for marketing websites by highlighting messages/sections."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"typography",children:"Typography"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["For default text we use ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorBaseBlack"})," as main color. On brand or dark colored backgrounds we recommend to use ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorBaseWhite"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["For headlines you can use either ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorBaseBlack"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorOcean500"}),". For the homepage in the hero section we recommend to use ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorOcean500"})," as display/h1."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["For interactive texts like inline-links use ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorOcean500"}),"."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"components",children:"Components"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"We use a set of engineering color variations to build the core fibres of many layouts and components. This core fibres can be:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"An engineering outline to shape the form of a toggle, text field etc."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"An engineering divider structuring content."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Engineering backgrounds/borders for tables, rows and columns."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"interactions",children:"Interactions"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"We use our brand colors to highlight interactive elements and their interaction states."}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorOcean500"}),": Default state"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorOcean600"}),": Hover state"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorOcean700"}),": Pressed state"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorEngineering300"}),": Disabled state"]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"signal-information",children:"Signal information"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"As in many user interfaces we also use signal colors to convey information quickly and effectively to the user."}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorGreen500"}),": Used to indicate a successful action."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorOrange500"}),": To indicate a warning message."]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorRed500"}),": To indicate an error message. The two shades ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorRed600"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorRed700"})," are used for destructive button states."]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"interactive-infographics",children:"Interactive infographics"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Sometimes it needs more colors to visualize complex infographics for example on dashboard user interfaces. In these cases we recommend to use these colors:",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorOcean100"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorOcean200"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorOcean300"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorOcean400"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorBerry400"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorBerry500"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorLawn400"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorLawn500"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorLawn600"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorSun400"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorSun500"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorSand400"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorSand500"})]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Preferred color should be:",(0,jsx_runtime.jsx)("br",{}),"\n",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorOcean100"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorOcean200"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorOcean300"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"$ifxColorOcean400"})," for example for a 4-clustered pie chart. It is important to note that these colors are not intended for use in user interface components such as buttons, text, and background colors."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"It is important to ensure that our design system is accessible to as many users as possible, including those with visual impairments. We have chosen our colors with accessibility in mind and we recommend that designers follow the guidelines outlined in the WCAG 2.1 standards when using color in their designs."})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}}}]);