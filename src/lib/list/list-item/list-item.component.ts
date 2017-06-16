import {
  Component,
  Input,
  ViewEncapsulation,
  ElementRef,
  Renderer2,
  OnInit
} from '@angular/core';
import { Router } from '@angular/router';

// this component should behave as li tag
@Component({
  selector: 'cd-list-item',
  template: `
    <ng-container>
      <cd-link [path]="link">
        <ng-content></ng-content>
      </cd-link>
    </ng-container>
  `,
  styleUrls: ['./list-item.component.less'],
  encapsulation: ViewEncapsulation.None,
})

export class ListItemComponent {
  @Input() link: string;
}
