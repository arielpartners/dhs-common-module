# DHS Common Module


## Agenda
* [Getting Started](https://github.com/arielpartners/dhs-common-module#getting-started)
* [Scripts](https://github.com/arielpartners/dhs-common-module#scripts)
* [Modules](https://github.com/arielpartners/dhs-common-module#modules)


## Getting Started

DHS Common Module was developed to provide common Angular4 components for Capdash2 and related DHS projects.
DHS Common Module allows developers to build and maintain working project with less pain, as well as improve browser load times for Angular2 projects by allowing developers to import UI modules selectively from the node_module directory.

Follow the instruction below to add this repository to any Angular4 project as a node module.

### 1. Installation

Run the following command on your terminal to add dependencies in
 `package.json`.

**for dev-dependency(recommended)**
```bash
npm install --save-dev git+https://github.com/arielpartners/dhs-common-module.git
```

**for dependency**
```bash
npm install --save git+https://github.com/arielpartners/dhs-common-module.git
```

### 2. Import module

In order to use DHS Common Module on your Angular4 project, you must import the module in `app.module.ts`.

**src/app.module.ts**

``` javascript
import ...
import { DHSModule } from 'dhs-common-module/src/lib/module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    DHSModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### 3. Combine Reducers

DHS Common Module is using redux to help you manage state in your project. However, redux store lives in your project, NOT within this repo. Therefore, developers need to combine reducers for certain Common Modules to work properly. [Click here](http://redux.js.org/docs/api/combineReducers.html) for detailed information about how to use combineReducers.

**Combine reducer example**

``` javascript
import { combineReducers } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';

import { DropdownReducer } from 'dhs-common-module/src/lib/menu';
import { SomeReducer } from './path/to/some-reducer.js'
import { AnyReducer } from './path/to/any-reducer.js'

export const rootReducer = composeReducers(
  defaultFormReducer(),
  combineReducers({
    dropdown: DropdownReducer,
    some: SomeReducer,
    any: AnyReducer
  })
);
```

Browse [included modules](https://github.com/arielpartners/dhs-common-module#modules) for further detail.


## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Build and start demo-app on `localhost:4200` |
| `npm run build` | Build demo-app to `/dist` |
| `npm run lint` | Run tslint |
| `npm test` | Run single run karma testing |
| `npm run test-browser` | Run karma testing on Chrome browser |
| `npm run coverage` | Run karma testing istanbul coverage |
| `npm run coverage-open` | Open karma coverage test report |
| `npm run json-server` | From second terminal window, spins up simple back end for demo-app |


## Modules

#### [Auth](https://github.com/arielpartners/dhs-common-module/blob/master/src/lib/auth/auth.md)

#### [Badge](https://github.com/arielpartners/dhs-common-module/blob/master/src/lib/badge/badge.md)

#### [Menu](https://github.com/arielpartners/dhs-common-module/blob/master/src/lib/menu/menu.md)

#### [Link](https://github.com/arielpartners/dhs-common-module/blob/master/src/lib/link/link.md)

#### [List](https://github.com/arielpartners/dhs-common-module/blob/master/src/lib/list/list.md)

#### [Icon](https://github.com/arielpartners/dhs-common-module/blob/master/src/lib/icon/icon.md)

#### [Text](https://github.com/arielpartners/dhs-common-module/blob/master/src/lib/list/list.md)

## Technologies Used

* [Angular 4](https://angular.io/) Angular4 JavaScript Client-Side MVC Framework (bundles Typescript and RxJS)
* [Redux](http://redux.js.org/) predictable state container for JavaScript apps
* [Redux Observables](https://redux-observable.js.org/) RxJS 5-based middleware for Redux.
* [Bootstrap](http://www.getbootstrap.com) and [Ng-Bootstrap](https://ng-bootstrap.github.io) CSS Framework and Bootstrap components powered by Angular
* [LESS](http://www.lesscss.org) CSS preprocessor to promote reusability and maintainability
* [Jasmine](https://jasmine.github.io/) Behavior-driven development framework for unit testing JavaScript code
