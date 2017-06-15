import { HomeComponent } from './components/home/home.component';
import { DemoMenuComponent } from './components/menu/menu.component';
import { DemoListComponent } from './components/list/list.component';
import { DemoIconComponent } from './components/icon/icon.component';
import { DummyItemComponent } from './components/item/item.component';

export const DemoAppRoute = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'menu', component: DemoMenuComponent, pathMatch: 'full' },
  { path: 'list', component: DemoListComponent, pathMatch: 'full' },
  { path: 'icon', component: DemoIconComponent, pathMatch: 'full' },
  { path: 'item', component: DummyItemComponent }
];
