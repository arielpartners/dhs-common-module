import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkModule } from '../link/link.module';
import { ListComponent, NavListCssDirective } from './list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    NavListCssDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LinkModule
  ],
  exports: [
    ListComponent,
    ListItemComponent,
    NavListCssDirective
  ]

})
export class ListModule { }
// export * from './list';
