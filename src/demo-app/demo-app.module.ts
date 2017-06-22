import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { DemoAppRoute } from './demo-app.routes';
import { DHSModule } from '../lib/module';

import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';
import { StoreModule } from './store/store.module';
import { MarkdownModule } from 'angular2-markdown';

import { DemoAppComponent } from './demo-app.component';
import { HomeComponent } from './components/home/home.component';
import { DemoMenuComponent } from './components/menu/menu.component';
import { CodeViewerComponent } from './components/code-viewer/code-viewer.component';
import { DemoListComponent } from './components/list/list.component';
import { DemoIconComponent } from './components/icon/icon.component';
import { DummyItemComponent } from './components/item/item.component';
import {DemoBadgeComponent} from './components/badge/badge.component';
import {DemoAuthComponent} from './components/auth/auth.component';
import {DemoLinkComponent} from './components/link/link.component';

@NgModule({
  declarations: [
    DemoAppComponent,
    DemoAuthComponent,
    HomeComponent,
    CodeViewerComponent,
    DemoMenuComponent,
    DemoListComponent,
    DemoLinkComponent,
    DemoIconComponent,
    DummyItemComponent,
    DemoBadgeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(DemoAppRoute),
    MarkdownModule.forRoot(),
    DHSModule.forRoot(),
    NgReduxModule,
    NgReduxRouterModule,
    StoreModule
  ],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule { }
