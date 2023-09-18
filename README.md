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
        <li><a href="#examples">Example applications demonstrating the usage of the IFX web components</a></li>
      </ul>
    </li>
    <li><a href="#project-structure">Project structure</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a><li>
        <ul>
        <li><a href="#angular">Angular</a></li>
        <li><a href="#react/vue">React/Vue</a></li>
        <li><a href="#vanilla">Vanilla</a></li>
      </ul>
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


### Example applications demonstrating the usage of IFX Web Components

- [Angular][Angular-example]
- [React + Javascript][React-example]
- [Vanilla][Vanilla-example]
- [Vue + Javascript][Vue-example]


<p align="right"><a href="#tableContent">back to top</a></p>


## Project structure 

### Overall structure

The repository has a monorepo architecture using Lerna. It contains not only our Stencil Web Components, but also framework integrations for Vue and React as well as example applications demonstrating component usage (not included in the Lerna workspaces)

### Wrapper components

Stencil Web Components can be used with any JavaScript framework or with no framework at all, just like any other HTML elements. This is because they are built on Web APIs that are native to the browser. They are self-contained and encapsulate their functionality in a way that makes them portable and easy to drop into any project.

To bridge the gap between Stencil components and specific frameworks, it can be useful to create wrapper components 

A Stencil Wrapper Component is a component that wraps around a Stencil Web Component and translates the properties, events, and methods to work seamlessly within the specific framework context.

Our Wrapper Components are built automatically every time ```npm run stencil:build``` is executed.

<p align="right"><a href="#tableContent">back to top</a></p>

 <br>

---

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

- [Node](https://nodejs.org/en/) > v14 .
- [Yarn](https://classic.yarnpkg.com/en/) > v1.22.10, or [Npm](https://www.npmjs.com/) > v6.14.13.

### Installation of the component libraray

---
#### Angular

**1.**

- **with NPM**

```npm install --save @infineon/infineon-design-system-stencil```

- **with Yarn**

```yarn add @infineon/infineon-design-system-stencil```

**2. Installation of SASS**
```bash
npm install sass
```

**3. Import the module inside your entry point file**

```bash
#main.ts
import { defineCustomElements } from "@infineon/infineon-design-system-stencil/loader";

defineCustomElements(window);
```
**4. Additional steps only for Angular**

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

<p align="right"><a href="#tableContent">back to top</a></p>

 <br>

---

#### React

React Wrappers: Similarly to Vue, a React wrapper provides a React interface to a Stencil web component, making the web component feel more like a typical React component. This includes proper handling of props, state, and events within the context of a React application.

**1. Installation**

**- with NPM**

```npm install @infineon/infineon-design-system-react```

**- with Yarn**

```yarn add @infineon/infineon-design-system-react```

**2. Installation of SASS**
```bash
npm install sass
```

**3. Import the module inside your entry point file**

```js
import { defineCustomElements } from '@infineon/infineon-design-system-react';
//...

defineCustomElements(window)
```

In React, there isn't a built-in mechanism to globally register components like in Vue. Therefore, components need to be imported in the file that they are being used in.

**4. Usage**

```js
import { IfxProgressBar, IfxSearchBar, IfxButton } from '@infineon/infineon-design-system-react';
//...
<IfxSearchBar onIfxChange={handleSearch} style={{ width: '100%' }} show-close-button="true"></IfxSearchBar>
```

**React + Javascript specific**

It may be necessary to add the following to your .env file at project root:

``GENERATE_SOURCEMAP=false``

This can also be achieved by updating your start script in the ``package.json`` accordingly.

<p align="right"><a href="#tableContent">back to top</a></p>

 <br>

---

#### Vanilla

Include the following script tag in your index.html

```bash
<script type="module" src="https://cdn.jsdelivr.net/npm/@infineon/infineon-design-system-stencil/dist/infineon-design-system-stencil/infineon-design-system-stencil.esm.js"></script>'

```

<p align="right"><a href="#tableContent">back to top</a></p>

 <br>

---

#### Vue

**1. Installation**

**- with NPM**

```npm install @infineon/infineon-design-system-vue```

**- with Yarn**

```yarn add @infineon/infineon-design-system-vue```

**2. Installation of SASS**
```bash
npm install sass
```

**3. Import the module inside your entry point file**

```js
//main.js/main.ts
import { ComponentLibrary } from '@infineon/infineon-design-system-vue';
//...

createApp(App).use(ComponentLibrary).mount('#app');
```

In Vue, this registers the components globally.

**4. Usage**

```js
<ifx-progress-bar v-model="progress" size="m" show-label="true"></ifx-progress-bar>
```

<p align="right"><a href="#tableContent">back to top</a></p>

 <br>

---

## General usage of IFX web components

Explore our currently available web components in Storybook. You will also find the code snippets needed to include them in your application.

https://infineon.github.io/infineon-design-system-stencil


 <br>

---

## Using only the Icons

For the case in which you only want to use our icons, please follow these steps:


1. install the package by following the instructions for the respective framework
2. Import only the ifx-icon component inside your entry point file as explained below;

For React: <b>index.js/index.ts</b> <br />
For Vue: <b>main.js/main.ts</b> <br />
For Angular: <b>main.ts</b>

```bash
import { defineCustomElement as defineCustomElementIfxIcon } from "@infineon/infineon-design-system-stencil/dist/components/ifx-icon";

defineCustomElementIfxIcon(window);
```

<p align="right"><a href="#tableContent">back to top</a></p>

 <br>

---

## Local development

### Installation

```bash
git clone https://github.com/Infineon/infineon-design-system-stencil.git
```

Install all the modules and dependencies listed on the ```package.json``` file with:

```bash
yarn/npm install
```

<p align="right"><a href="#tableContent">back to top</a></p>

 <br>

---

### Build Storybook

To run Storybook to view and test our Stencil Web Components, we first need to export it as a static web app.

For building the application for the first time (to load fonts, assets and stylesheets) run:

```bash
yarn/npm run build:storybook
```

This will generate a static Storybook in the ```storybook-static``` directory.

### Start Storybook

To run storybook locally (automatically rebuilds on changes), run:

```bash
yarn/npm run storybook
```


<p align="right"><a href="#tableContent">back to top</a></p>

 <br>

---

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

<p align="right"><a href="#tableContent">back to top</a></p>

 <br>

---

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
[Vue-example]: https://infineon.github.io/infineon-design-system-stencil/vue-example
[React-example]: https://infineon.github.io/infineon-design-system-stencil/react-example
[Angular-example]: https://infineon.github.io/infineon-design-system-stencil/angular-example
[Vanilla-example]: https://infineon.github.io/infineon-design-system-stencil/vanilla-example
