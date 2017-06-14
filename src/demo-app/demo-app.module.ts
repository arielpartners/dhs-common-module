import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';
import { DemoAppRoute } from './app/demo-app.routes';
import { CapDashModule } from '../lib/module';

import { NgReduxModule } from '@angular-redux/store';
import { NgReduxRouterModule } from '@angular-redux/router';
import { StoreModule } from './store/store.module';

import { DemoAppComponent } from './app/demo-app.component';
import { HomeComponent } from './home.component';
import { DemoMenuComponent } from './menu/menu.component';
import { DemoListComponent } from './list/list.component';

@NgModule({
  declarations: [
    DemoAppComponent,
    HomeComponent,
    DemoMenuComponent,
    DemoListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(DemoAppRoute),
    CapDashModule.forRoot(),
    NgReduxModule,
    NgReduxRouterModule,
    StoreModule
  ],
  bootstrap: [DemoAppComponent]
})
export class DemoAppModule { }
