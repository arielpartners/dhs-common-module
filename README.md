# Capdash Common Module


## Agenda
* [Getting Started](https://github.com/arielpartners/capdash2-common-module#getting-started)
* [Scripts](https://github.com/arielpartners/capdash2-common-module#scripts)
* [Modules](https://github.com/arielpartners/capdash2-common-module#modules)

## Getting Started

CDUI was develop to provide common Angular4 components for Capdash2 for developers to build and maintain working project with less pain,
as well as improve load time of Angular2 project on the browser, by allowing developers to import UI modules selectively from node_module directory.

Follow the instruction below to add this repository to Angular4 project as node module.

### 1.Installation

Run following command on your terminal to add dependency on 
 `package.json`.

    npm install --save git+https://github.com/arielpartners/capdash2-common-module.git


### 2. Import module

In order to use Capdash2 Common Module on your Angular4 project, you must import module on `app.module.ts`.

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

Capdash Common Module is using redux to help you manage states of your project. However, redux store lives in your project, NOT within this repo. Therefore, developers are responsible to combine reducers for certain Capdash Common Module. [Click here](http://redux.js.org/docs/api/combineReducers.html) for detail information about how to use combineReducers.

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

-----

## Scripts

| Command | Description |
| --- | --- |
| `npm run lint` | Run tslint |
| `npm test` | Run single run karma testing |
| `npm run test-browser` | Run karma testing on Chrome browser |
| `npm run coverage` | Run karma testing istanbul coverage |
| `npm run coverage-open` | Open karma coverage test report |


-----

## Modules

### [MenuModule](https://github.com/arielpartners/capdash2-common-module/blob/master/src/lib/menu/menu.md)

### [ListModule](https://github.com/arielpartners/capdash2-common-module/blob/master/src/lib/list/list.md)

### [IconModule](https://github.com/arielpartners/capdash2-common-module/blob/master/src/lib/icon/icon.md)

### [TextModule](https://github.com/arielpartners/capdash2-common-module/blob/master/src/lib/list/list.md)

