import { HomeComponent } from '../home.component';
import { DemoMenuComponent } from '../menu/menu.component';
import { DemoListComponent } from '../list/list.component';

export const DemoAppRoute = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: DemoMenuComponent },
  { path: 'list', component: DemoListComponent }
]
