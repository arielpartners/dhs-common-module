import {MockComponent} from 'ng2-mock-component';

export const MockIconComponent = MockComponent({
  selector: 'dhs-icon',
  inputs: ['font', 'size', 'icon', 'fixed', 'color'],
  outputs: ['font', 'size', 'icon', 'fixed', 'color'],
});
