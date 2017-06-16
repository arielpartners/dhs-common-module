import {MockComponent} from 'ng2-mock-component';

export const MockListComponent = MockComponent({
  selector: 'dhs-list',
  inputs: ['className'],
  outputs: ['className'],
});

export const MockBadgeComponent = MockComponent({
  selector: 'dhs-badge',
  inputs: ['status', 'value', 'right'],
  outputs: ['status', 'value', 'right'],
});

export const MockListItemComponent = MockComponent({
  selector: 'dhs-list-item',
  inputs: ['link', 'className'],
  outputs: ['link', 'className'],
});
