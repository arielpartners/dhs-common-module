import { HomeComponent } from './components/home/home.component';
import { DemoMenuComponent } from './components/menu/menu.component';
import { DemoAuthComponent } from './components/auth/auth.component';
import { DemoListComponent } from './components/list/list.component';
import { DemoIconComponent } from './components/icon/icon.component';
import { DummyItemComponent } from './components/item/item.component';
import { DemoBadgeComponent } from './components/badge/badge.component';
import { DemoLinkComponent } from './components/link/link.component';

export const DemoAppRoute = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'menu', component: DemoMenuComponent, pathMatch: 'full' },
  { path: 'auth', component: DemoAuthComponent, pathMatch: 'full' },
  { path: 'list', component: DemoListComponent, pathMatch: 'full' },
  { path: 'link', component: DemoLinkComponent, pathMatch: 'full' },
  { path: 'icon', component: DemoIconComponent, pathMatch: 'full' },
  { path: 'badge', component: DemoBadgeComponent, pathMatch: 'full' },
  { path: 'item', component: DummyItemComponent }
];
