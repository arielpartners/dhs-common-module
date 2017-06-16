import {
  Component,
  Directive,
  HostBinding,
  ViewEncapsulation,
  Input
} from '@angular/core';

@Component({
  selector: 'dhs-list, dhs-nav-list',
  template: `
      <ng-container>
        <ng-content></ng-content>
      </ng-container>
  `,
  styleUrls: ['./list.component.less'],
  encapsulation: ViewEncapsulation.None
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
