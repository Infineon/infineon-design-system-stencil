# Infineon Design System Stencil Web Components (MVP)
[![GitHub Repo Issues](https://img.shields.io/github/issues/Infineon/infineon-design-system-stencil?style=plastic)](https://github.com/Infineon/infineon-design-system-stencil/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr-raw/Infineon/infineon-design-system-stencil?style=plastic)](https://github.com/Infineon/infineon-design-system-stencil/pulls)
[![GitHub Repo Version](https://img.shields.io/github/package-json/v/Infineon/infineon-design-system-stencil?style=plastic)](https://github.com/Infineon/infineon-design-system-stencil/blob/master/package.json)
[![GitHub Master Branch Weekly Commits](https://img.shields.io/github/commit-activity/w/Infineon/infineon-design-system-stencil/master?style=plastic)](https://github.com/Infineon/infineon-design-system-stencil/tree/master)
[![GitHub Repo Contributors](https://img.shields.io/github/contributors/Infineon/infineon-design-system-stencil?style=plastic)](https://github.com/Infineon/infineon-design-system-stencil/graphs/contributors)
[![GitHub Repo Discussions](https://img.shields.io/github/discussions/Infineon/infineon-design-system-stencil)](https://github.com/Infineon/infineon-design-system-stencil/)


<!-- TABLE OF CONTENTS -->
<details id="tableContent">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage-of-components">Usage</a></li>
      <li><a href="#local-development">Local development</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

As part of the Infineon brand guidelines, the Infineon Digital Design System supports designers, developers and project managers to build user interfaces faster and better – with the ultimate goal to create a coherent and optimal user journey across all internal and external Infineon digital touchpoints.

This repository contains an implementation of Infineons Digital Design System and it's Storybook sourcecode using Stencil web components.

Use it to build & run storybook and distribute the Stencil web components.

### Built With

[Stencil web components][Stencil-url]

<p align="right"><a href="#tableContent">back to top</a></p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

- [Node](https://nodejs.org/en/) v14 or older.
- [Yarn](https://classic.yarnpkg.com/en/) v1.22.10 or older, or [Npm](https://www.npmjs.com/) v6.14.13 or older.

### Installation on React, Vue or Angular

#### With NPM

1. ```npm install --save @infineon/infineon-design-system-stencil```

#### With Yarn

1. ```yarn add @infineon/infineon-design-system-stencil```

#### Import the module inside your entry point file.

For React: <b>index.js</b> <br />
For Vue: <b>main.js</b> <br />
For Angular: <b>main.ts</b>

```bash
import { defineCustomElements } from "@infineon/infineon-design-system-stencil/loader";

defineCustomElements(window);
```

##### Additional steps for Angular

Inside <b>app.modules.ts</b> file:

```bash
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
 ...
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
 ...
})
```


##### Additional steps for Vue (when using the plain Stencil components)

Inside <b>vite.config.js</b> file:

```bash
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags starting with 'ifx-' as custom elements
          isCustomElement: (tag) => tag.startsWith('ifx-')
        }
      }
    }),
    ...
  ]
});
```

##### Additional steps for React (when using the plain Stencil components)

To listen to custom events emitted from the Stencil components, you might need to attach an EventListener.

```bash
import React, { useEffect, useRef } from 'react';

function App() {
  const checkboxRef = useRef();

  useEffect(() => {
    const checkbox = checkboxRef.current;
    checkbox.addEventListener("ifxChange", toggleValue);
    return () => {
      checkbox.removeEventListener("ifxChange", toggleValue);
    };
  });

  ...
  
   return (
      <ifx-checkbox ref={checkboxRef} disabled={disabled} value={checked} error={error} name="name" onIfxChange={toggleValue}>label</ifx-checkbox>
  );
}

export default App;
```

#### Installation of SASS
<!-- For React projects only, run:  -->
```bash
npm install sass
```

 <br>

## Usage of components

Explore our currently available web components in Storybook. You will also find the code snippets needed to include them in your application.

https://infineon.github.io/infineon-design-system-stencil


<p align="right"><a href="#tableContent">back to top</a></p>

 <br>

## Using only the Icons

For the case in which you only want to use our icons, please follow these steps:

1. install the package by following the instructions explained above
2. Import only the ifx-icon component inside your entry point file as explained below;

For React: <b>index.js</b> <br />
For Vue: <b>main.js</b> <br />
For Angular: <b>main.ts</b>

```bash
import { defineCustomElement as defineCustomElementIfxTag } from "@infineon/infineon-design-system-stencil/dist/components/ifx-icon";

defineCustomElementIfxTag(window);
```

 <br>

## Local development

Please note that the current version of storybook does not support the latest Node version. Please use Node version < 17.
### Installation

```bash
git clone https://github.com/Infineon/infineon-design-system-stencil.git
```

Install all the modules and dependencies listed on the ```package.json``` file with:

```bash
yarn/npm install
```

## Project structure 

### Overall structure

The repository has a monorepo architecture, containing not only our Stencil Web Components, but also framework integrations for Vue and React as well as example applications demonstrating component usage.

### Wrapper components

Stencil Web Components can be used with any JavaScript framework or with no framework at all, just like any other HTML elements. This is because they are built on Web APIs that are native to the browser. They are self-contained and encapsulate their functionality in a way that makes them portable and easy to drop into any project.

To bridge the gap between Stencil components and specific frameworks, it can be useful to create wrapper components 

A Stencil Wrapper Component is a component that wraps around a Stencil Web Component and translates the properties, events, and methods to work seamlessly within the specific framework context.

Our Wrapper Components are built automatically every time ```npm run stencil:build``` is executed.

 <br>

### Build Storybook

To run Storybook to view and test our Stencil Web Components, we first need to export it as a static web app.

For building the application for the first time (to load fonts, assets and stylesheets) navigate to 

```bash
cd packages/components
``` 

and run:

```bash
yarn/npm run build:storybook
```

This will generate a static Storybook in the ```storybook-static``` directory.

### Start Storybook

To run storybook locally (automatically rebuilds on changes), run:

```bash
yarn/npm run dev
```

 <br>

### Example applications

To test the standard Stencil components within our example applicatons, navigate to 

```bash
cd examples/stencil-components
```

and go to the folder for Vue, React, Angular or VanillaJs. Follow the instructions described in the ```readme.md``` in each of these folders.

To test the Wrapper components within React or Vue applicatons, navigate to 

```bash
cd examples/wrapper-components
```

and go to the application folder you want to use for testing. (React-Ts, React-Js, Vue-Ts, Vue-Js). Again, follow the instructions described in the ```readme.md``` in each of these folders.

 <br>

### Contributing

+ Create an issue with your new feature description on Github
+ Go to the issue and create a feature from it. (Naming convention: 'feature/name-of-component').
+ After the feature is ready for testing, create a pull request and request review => On each new pull request, github actions trigger the deployment to a github pages preview url as well as a canary release that can be used to include and test the new feature in another web application



<p align="right"><a href="#tableContent">back to top</a></p>

 <br>
 
## Contact

### Email
dds@infineon.com <br />


<p align="right"><a href="#tableContent">back to top</a></p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Stencil-url]: https://stenciljs.com/
