import { HomeComponent } from './components/home/home.component';
import { DemoMenuComponent } from './components/menu/menu.component';
import { DemoListComponent } from './components/list/list.component';
import { DemoIconComponent } from './components/icon/icon.component';

export const DemoAppRoute = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: DemoMenuComponent },
  { path: 'list', component: DemoListComponent },
  { path: 'icon', component: DemoIconComponent }
];
