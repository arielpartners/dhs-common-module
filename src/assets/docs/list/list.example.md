## Example

```html
<dhs-list>
  <dhs-list-item class="custom" link="/list" routerLinkActive="active">Active List</dhs-list-item>
  <dhs-list-item link="/list" routerLinkActive="test">Active List</dhs-list-item>
  <dhs-list-item link="/auth">
    Non Active with badge
    <dhs-badge status="success" type="badge"></dhs-badge>
  </dhs-list-item>
  <dhs-list-item link="http://www.google.com">Non Active with external link</dhs-list-item>
  <dhs-list-item link="/item">Test</dhs-list-item>
</dhs-list>
```
