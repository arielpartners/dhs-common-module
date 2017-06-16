# List Module

## Overview



## API Reference

### Components

#### List

Selector: `dhs-list`


#### List Item

Selector: `dhs-list-item`

** Properties **

| Name | Type | Description |
| --- | --- | --- |
| @Input() link | string | Assign href of list item |


#### Badge

Selector: `dhs-badge`

** Properties **

| Name | Type | Description |
| --- | --- | --- |
| @Input() status | string | Assign status of badge |
| @Input() value | string or number | Assign value of badge |



## Example

```html
<dhs-list>
    <dhs-list-item link="/item1">
      Item1
      <dhs-badge status="success" value="NEW"></dhs-badge>
    </dhs-list-item>
    <dhs-list-item link="/item2">Item2</dhs-list-item>
    <dhs-list-item link="/item3">Item3</dhs-list-item>
    <dhs-list-item link="/item4">Item4</dhs-list-item>
</dhs-list>
```
