import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'dhs-list-item',
  template: `
    <ng-container>
      <ng-content></ng-content>
    </ng-container>
  `,
  styleUrls: ['./list-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})

export class ListItemComponent {}
