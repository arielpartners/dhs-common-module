import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { DemoAppRoute } from './demo-app.routes';
import { CapDashModule } from '../lib/module';

import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';
import { StoreModule } from './store/store.module';
import { MarkdownModule } from 'angular2-markdown';

import { DemoAppComponent } from './demo-app.component';
import { HomeComponent } from './components/home/home.component';
import { DemoMenuComponent } from './components/menu/menu.component';
import {CodeViewerComponent} from './components/code-viewer/code-viewer.component';

@NgModule({
  declarations: [
    DemoAppComponent,
    HomeComponent,
    CodeViewerComponent,
    DemoMenuComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(DemoAppRoute),
    MarkdownModule.forRoot(),
    CapDashModule.forRoot(),
    NgReduxModule,
    NgReduxRouterModule,
    StoreModule
  ],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule { }
