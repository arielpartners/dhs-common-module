import { HomeComponent } from '../home.component';
import { DemoMenuComponent } from '../menu/menu.component';
import { DemoListComponent } from '../list/list.component';
import { DemoIconComponent } from '../icon/icon.component';

export const DemoAppRoute = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: DemoMenuComponent },
  { path: 'list', component: DemoListComponent },
  { path: 'icon', component: DemoIconComponent }
]
