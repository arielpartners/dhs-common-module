# Badge Module

## Overview

Easily highlight new or unread items by adding `<dhs-badge>Default</dhs-badge>`

## API Reference

### Component

#### Badge

Selector: `dhs-badge`

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| @Input() status | string | Assign status of badge |
| @Input() type | string | Assign type of badge |

choose one from following badge status options
['default, danger, warning, success, info, primary, inverse']

if not chosen status will be set as 'default'


choose one from following badge type options
['label, badge, badge-square']

if not chosen type will be set as 'badge'


```html
<dhs-badge>Default</dhs-badge>
<dhs-badge status="warning" type="label">Warning!</dhs-badge>
<dhs-badge status="inverse" type="square" pull="right">4</dhs-badge>
```
