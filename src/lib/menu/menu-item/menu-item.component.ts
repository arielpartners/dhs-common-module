import {
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'cd-menu-item',
  template: `
    <ng-container>
      <cd-link [path]="link" cdCloseToggle>
        <ng-content></ng-content>
      </cd-link>
    </ng-container>
  `,
  styleUrls: ['./menu-item.component.less'],
  encapsulation: ViewEncapsulation.None,
})

export class MenuItemComponent {
  @Input() link: string;
}
