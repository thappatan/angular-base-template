# CIO Portfolio Dashboard System Web 

### Built With

This section list frameworks/libraries used to in project.

* [Angular](https://angular.io/) version 14.0.4

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

To use the Angular framework, you should be familiar with the following:
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
* [HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
* [Node.js](https://nodejs.org/en/)
* [npm](https://docs.npmjs.com/about-npm)

Knowledge of TypeScript is helpful, but not required.

### Installation

_You use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment._

To install the Angular CLI, open a terminal window and run the following command
```sh
npm install -g @angular/cli
```

_If you already installed Angular CLI, Next step you must be install all libraries to used in this project._

To install all libraries, open a terminal window and run the following command
```sh
npm install
```
<b>Or install by [Makefile](https://makefiletutorial.com/) command</b>
```sh
make install
```

_If you want to run application._

To run application, open a terminal window and run the following command
```sh
ng serve
```
<b>Or run by npm command</b>
```sh
npm run start
```
<b>Or run by [Makefile](https://makefiletutorial.com/) command</b>
```sh
make run
```

<p align="right">(<a href="#top">back to top</a>)</p>


### Project Layout Structure
```
  ∇ app
    ∇ core
         ∇ guards
              auth.guard.ts
              module-import.guard.ts
              no-auth.guard.ts
         ∇ interceptor
              token.interceptor.ts
              error.interceptor.ts
         ∇ services
              service-a.service.ts
              service-b.service.ts
         ∇ components
              ∇ navbar
                    navbar.component.html|scss|ts
              ∇ page-not-found
                    page-not-found.component.html|scss|ts
         ∇ constants
              constant-a.ts
              constant-b.ts
         ∇ enums
              enum-a.ts
              enum-b.ts
         ∇ models
              model-a.ts
              model-b.ts
         ∇ utils
              common-functions.ts
    ∇ features
         ∇ feature-a
              ∇ components
                    ∇ scoped-shared-component-a
                            scoped-shared-component-a.component.html|scss|ts
                    ∇ scope-shared-component-b
                            scoped-shared-component-b.component.html|scss|ts
              ∇ pages
                   ∇ page-a
                        page-a.component.html|scss|ts
                   ∇ page-b
                        page-b.component.html|scss|ts
              ∇ models
                    scoped-model-a.model.ts
                    scoped-model-b.model.ts
              ∇ services
                    scoped-service-a.service.ts
                    scoped-service-b.service.ts
              feature-a-routing.module.ts
              feature-a.module.ts
              feature-a.component.html|scss|ts
    ∇ shared
         ∇ components
              ∇ shared-button
                   shared-button.component.html|scss|ts
         ∇ directives
              shared-directive.ts
         ∇ pipes
              shared-pipe.ts
         shared.module.ts
    styles.scss
    ▽ styles
        app-loading.scss
        company-colors.scss
        spinners.scss
        variables.scss
    ▽ assets
        ▽ i18n
            lang-a.json
            lang-b.json
        ▽ images
            image-a.svg
            image-b.svg
        ▽ static
            structure-a.json
            structure-b.json
        ▽ icons
            custom-icon-a.svg
            custom-icon-b.svg

```

