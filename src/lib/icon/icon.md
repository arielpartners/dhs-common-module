# Icon Module

## Overview

Icon component returns element to display icon. By default, it uses font-awesome icons.
However, if you wish to change font set, you may use `fontSet` attribute to set which font group you wish to use

## API Reference

### Components

#### Icon

Selector: `cd-icon`

** Properties **

| Name | Type | Description |
| --- | --- | --- |
| @Input() font | string | Assign font-set of icon |
| @Input() icon | string | Assign name of icon |
| @Input() size | string | Assign size of icon |
| @Input() fixed | string | Assign fixed-width |
| @Input() color | string | Assign background color of icon |


## Example

By default, `<cd-icon>` will use font-awesome as its icon font.

** Basic **
    
    You can simply add `icon` attribute on `<cd-icon>` to display any font-awesome-icon

```html
<cd-icon icon="desktop"></cd-icon>
```

** Set icon size **

Add `size` attribute on `<cd-icon>` to enlarge current icon.
For more detail, checkout source file of font-awesome [larger.less](https://github.com/FortAwesome/Font-Awesome/blob/v4.7.0/less/larger.less)

```html
<cd-icon icon="desktop" size="lg"></cd-icon>
```

** Set icon background color **

```html
<cd-icon color="red" icon="alarm"></cd-icon>
```

** Set icon fixed width **

```html
<cd-icon icon="desktop" size="lg" fixed="true"></cd-icon>
```

** Set font-set **

You can add other font-set as well, however it's not well supported

```html
<cd-icon font="other-font" icon="desktop"></cd-icon>
```
