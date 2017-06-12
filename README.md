# Capdash Common Module


## Agenda
* Getting Started
* Scripts
* Modules

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


**3. Combine Reducers**

Capdash Common Module is using redux to help you manage states of your project. However, redux store lives in your project, NOT within this repo. Therefore, developers are responsible to combine reducers for certain Capdash Common Module. 

* **Combine reducer example**

>     //Todo: add instruction to add reducer to application store

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

Todo: make this into table

### [MenuModule](link_to_Menu.md)

**Components**

* Menu
* MenuHeader
* MenuItem
* MenuButton

**Directives**

* CloseToggleDirective

**Services**

* DropdownService

[ListModule](link_to_List.md)
    components
    - List
    - ListItem

[BadgeModule](link_to_Badge.md)
    components
    - Badge

[IconModule](link_to_Icon.md)
    components
    - Icon

[TextModule](link_to_Text.md)
    directives
    - TextInverse


