import {MockComponent} from 'ng2-mock-component';

export const MockMenuComponent = MockComponent({
  selector: 'dhs-menu',
  inputs: ['triggerBy', 'className'],
  outputs: ['triggerBy', 'className'],
});

export const MockMenuHeaderComponent = MockComponent({
  selector: 'dhs-menu-header',
  inputs: ['icon', 'text'],
  outputs: ['icon', 'text'],
});

export const MockMenuButtonComponent = MockComponent({
  selector: 'dhs-menu-button',
  inputs: ['id', 'name', 'className'],
  outputs: ['id', 'name', 'className'],
});

export const MockMenuItemComponent = MockComponent({
  selector: 'dhs-menu-item',
  inputs: ['link', 'className'],
  outputs: ['link', 'className'],
});
