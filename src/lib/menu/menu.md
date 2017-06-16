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

Selector: `dhs-menu`

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| @Input() triggerBy | string | Assign id of button triggered |
| @Input() className | string | Assign class of the menu |


#### Menu Button

Selector: `dhs-menu-button`

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| @Input() id | string | Assign id of the menu button |
| @Input() className | string | Assign class of the menu |


#### Menu Header

Selector: `dhs-menu-header`

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| @Input() icon | string | Assign icon of menu header |
| @Input() text | string | Assign text of menu header |


#### Menu Item

Selector: `dhs-menu-item`

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| @Input() link | string | Assign href of menu item |


### Directive

#### CloseToggleDirective

Selector: `dhs-close-toggle`, `close-toggle`

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
[Basic menu](https://github.com/arielpartners/capdash2-common-module/blob/master/src/assets/docs/menu/menu.example1.md)
[Dropdown menu](https://github.com/arielpartners/capdash2-common-module/blob/master/src/assets/docs/menu/menu.example2.md)
