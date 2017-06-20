import {Component, ViewEncapsulation} from '@angular/core';

const appMenu = [
  {
    name: 'Common Module',
    link: '/'
  },
  {
    name: 'Badge',
    link: '/badge'
  },
  {
    name: 'Menu',
    link: '/menu'
  },
  {
    name: 'List',
    link: '/list'
  },
  {
    name: 'Icon',
    link: '/icon'
  },
  {
    name: 'Text',
    link: '/text'
  }
];

@Component({
  selector: 'demo-app',
  template: `
    <div>
      <div id="demo-sidebar">
        <dhs-list>
          <li *ngFor="let item of menu">
            <a [routerLink]="item.link">{{item.name}}</a>
          </li>
        </dhs-list>
      </div>
      <div id="demo-content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styleUrls: ['./demo-app.component.less'],
  encapsulation: ViewEncapsulation.None,
})

export class DemoAppComponent {
  public menu = appMenu;
}
