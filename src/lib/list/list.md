# List Module

## Overview



## API Reference

### Components

#### List

Selector: `cd-list`


#### List Item

Selector: `cd-list-item`

** Properties **

| Name | Type | Description |
| --- | --- | --- |
| @Input() link | string | Assign href of list item |


#### Badge

Selector: `cd-badge`

** Properties **

| Name | Type | Description |
| --- | --- | --- |
| @Input() status | string | Assign status of badge |
| @Input() value | string or number | Assign value of badge |


### Directive

#### CloseToggleDirective

Selector: `cd-close-toggle`, `close-toggle`

** Methods **

| Name | Description |
| --- | --- |
| onClick() | DropdownService.closeToggle() |


### Service

#### DropdownService

** Methods **

| Name | Description |
| --- | --- |
| closeToggle() | dispatch action to close toggled menu |
| openToggle() | dispatch action to open menu |
| toggleDropdown($event) | toggle menu of event target   |



## Example

    <cd-menu-button id="myMenu" name="menuName">
        Menu1
    </cd-menu-button>
    <cd-menu triggerBy="myMenu">
        <cd-menu-header icon="fa fa-desktop" text="Header"></cd-menu-header>
        <cd-menu-item link="/item1">Item1</cd-menu-item>
        <cd-menu-item link="/item2">Item2</cd-menu-item>
        <cd-menu-item link="/item3">Item3</cd-menu-item>
        <cd-menu-item link="/item4">Item4</cd-menu-item>
    </cd-menu>

