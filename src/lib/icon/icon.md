# Icon Module

## Overview

Icon component returns element to display icon. By default, it uses font-awesome icons.
However, if you wish to change font set, you may use `fontSet` attribute to set which font group you wish to use

## API Reference

### Components

#### Icon

Selector: `dhs-icon`

** Properties **

| Name | Type | Description |
| --- | --- | --- |
| @Input() font | string | Assign font-set of icon |
| @Input() icon | string | Assign name of icon |
| @Input() size | string | Assign size of icon |
| @Input() fixed | string | Assign fixed-width |
| @Input() color | string | Assign background color of icon |


## Example

By default, `<dhs-icon>` will use font-awesome as its icon font.

** Basic **
    
    You can simply add `icon` attribute on `<dhs-icon>` to display any font-awesome-icon

```html
<dhs-icon icon="desktop"></dhs-icon>
```

** Set icon size **

Add `size` attribute on `<dhs-icon>` to enlarge current icon.
For more detail, checkout source file of font-awesome [larger.less](https://github.com/FortAwesome/Font-Awesome/blob/v4.7.0/less/larger.less)

```html
<dhs-icon icon="desktop" size="lg"></dhs-icon>
```

** Set icon background color **

```html
<dhs-icon color="red" icon="alarm"></dhs-icon>
```

** Set icon fixed width **

```html
<dhs-icon icon="desktop" size="lg" fixed="true"></dhs-icon>
```

** Set font-set **

You can add other font-set as well, however it's not well supported

```html
<dhs-icon font="other-font" icon="desktop"></dhs-icon>
```
