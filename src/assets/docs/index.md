# Capdash Common Module


## Agenda
* [Getting Started](https://github.com/arielpartners/capdash2-common-module#getting-started)
* [Scripts](https://github.com/arielpartners/capdash2-common-module#scripts)
* [Modules](https://github.com/arielpartners/capdash2-common-module#modules)


## Getting Started

CDUI was developed to provide common Angular4 components for Capdash2 and related DHS projects.
CDUI allows developers to build and maintain working project with less pain, as well as improve browser load times for Angular2 projects by allowing developers to import UI modules selectively from the node_module directory.

Follow the instruction below to add this repository to any Angular4 project as a node module.

### 1.Installation

Run the following command on your terminal to add dependency in 
 `package.json`.

```bash
npm install --save git+https://github.com/arielpartners/capdash2-common-module.git
    
npm install --save-dev git+https://github.com/arielpartners/capdash2-common-module.git
```

### 2. Import module

In order to use Capdash2 Common Module on your Angular4 project, you must import the module in `app.module.ts`.

**src/app.module.ts**

    import ...
    import { CapDashModule } from 'capdash-common-module/src/lib/module';

    @NgModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        CapDashModule.forRoot()
      ],
      bootstrap: [AppComponent]
    })
    export class AppModule {}


### 3. Combine Reducers

Capdash Common Module is using redux to help you manage state in your project. However, redux store lives in your project, NOT within this repo. Therefore, developers are responsible to combine reducers for certain Capdash Common Module. [Click here](http://redux.js.org/docs/api/combineReducers.html) for detail information about how to use combineReducers.

**Combine reducer example**

    import { combineReducers } from 'redux';
    import { composeReducers, defaultFormReducer } from '@angular-redux/form';
    
    import { DropdownReducer } from 'capdash2-common-module/src/lib/menu';
    import { SomeReducer } from './path/to/some-reducer.js'
    import { AnyReducer } from './path/to/some-reducer.js'
    
    export const rootReducer = composeReducers(
      defaultFormReducer(),
      combineReducers({
        dropdown: DropdownReducer,
        some: SomeReducer,
        any: AnyReducer
      })
    );

Browse [included modules](link_to_modules_section) for further detail.


## Scripts

| Command | Description |
| --- | --- |
| `npm run lint` | Run tslint |
| `npm test` | Run single run karma testing |
| `npm run test-browser` | Run karma testing on Chrome browser |
| `npm run coverage` | Run karma testing istanbul coverage |
| `npm run coverage-open` | Open karma coverage test report |


## Modules

### [MenuModule](https://github.com/arielpartners/capdash2-common-module/blob/master/src/lib/menu/menu.md)

### [ListModule](https://github.com/arielpartners/capdash2-common-module/blob/master/src/lib/list/list.md)

### [IconModule](https://github.com/arielpartners/capdash2-common-module/blob/master/src/lib/icon/icon.md)

### [TextModule](https://github.com/arielpartners/capdash2-common-module/blob/master/src/lib/list/list.md)

## Technologies Used 

* [Angular 4](https://angular.io/) Angular4 JavaScript Client-Side MVC Framework (bundles Typescript and RxJS)
* [Redux](http://redux.js.org/) predictable state container for JavaScript apps
* [Redux Observables](https://redux-observable.js.org/) RxJS 5-based middleware for Redux.
* [Bootstrap](http://www.getbootstrap.com) and [Ng-Bootstrap](https://ng-bootstrap.github.io) CSS Framework and Bootstrap components powered by Angular
* [LESS](http://www.lesscss.org) CSS preprocessor to promote reusability and maintainability
* [Jasmine](https://jasmine.github.io/) Behavior-driven development framework for unit testing JavaScript code
