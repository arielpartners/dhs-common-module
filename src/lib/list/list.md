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



## Example
    
    <cd-list>
        <cd-list-item link="/item1">
          Item1
          <cd-badge *ngIf="item.badge" [status]="item.badge.class" [value]="item.badge.value"></cd-badge>
        </cd-menu-item>
        <cd-list-item link="/item2">Item2</cd-menu-item>
        <cd-list-item link="/item3">Item3</cd-menu-item>
        <cd-list-item link="/item4">Item4</cd-menu-item>
    </cd-list>

