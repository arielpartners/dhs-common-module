# Menu Module

## Overview

Menu module provides Menu, MenuHeader, MenuButton, MenuItem to construct menu on your application.

Menu component provides wrapper for menu items. When you feed matching value for `triggerBy` attribute on menu component and id attribute on menu button component, your menu component will toggled by clicking that menu button component.

Menu button component simply provides label and input type radio button to toggle menu component.

Menu header component returns menu heading with icon

Menu item component wraps given child nodes with `<li><a>`. You can manipulate it's class and link by assigning value to `link` and `className` attribute of this component.

## API Reference

### Components

#### Menu

Selector: `cd-menu`

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| @Input() triggerBy | string | Assign id of button triggered |
| @Input() className | string | Assign class of the menu |


#### Menu Button

Selector: `cd-menu-button`

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| @Input() id | string | Assign id of the menu button |
| @Input() className | string | Assign class of the menu |


#### Menu Header

Selector: `cd-menu-header`

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| @Input() icon | string | Assign icon of menu header |
| @Input() text | string | Assign text of menu header |


#### Menu Item

Selector: `cd-menu-item`

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| @Input() link | string | Assign href of menu item |


### Directive

#### CloseToggleDirective

Selector: `cd-close-toggle`, `close-toggle`

**Methods**

| Name | Description |
| --- | --- |
| onClick() | DropdownService.closeToggle() |


### Service

#### DropdownService

**Methods**

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

