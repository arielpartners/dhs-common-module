import {
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'dhs-menu-item',
  template: `
    <ng-container>
      <dhs-link [path]="link" dhsCloseToggle>
        <ng-content></ng-content>
      </dhs-link>
    </ng-container>
  `,
  styleUrls: ['./menu-item.component.less'],
  encapsulation: ViewEncapsulation.None,
})

export class MenuItemComponent {
  @Input() link: string;
}
