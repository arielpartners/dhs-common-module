import {
  Component,
  Directive,
  HostBinding,
  ViewEncapsulation,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'dhs-list, dhs-nav-list',
  template: `
      <ng-container>
        <ng-content></ng-content>
      </ng-container>
  `,
  styleUrls: ['./list.component.less'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {}

@Directive({
  selector: '[dhsNavList], [NavList], [dhs-nav-list], [nav-list]',
})
export class NavListCssDirective {
  @HostBinding('class.nav') private navList: boolean;
  constructor() {
    this.navList = true;
  }
}
