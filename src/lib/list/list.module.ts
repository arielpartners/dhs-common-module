import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkModule } from '../link/link.module';
import { ListComponent, NavListCssDirective } from './list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { BrowserModule } from '@angular/platform-browser';
import {ExpandableDirective, HasSubDirective, SubListDirective} from './expandable/expandable.directive';
import {ExpandableService} from './expandable/expandable.service';
import {ListGroupActiveService} from './expandable/list-group-active.service';

@NgModule({
  declarations: [
    ListComponent,
    ListItemComponent,
    NavListCssDirective,
    ExpandableDirective,
    HasSubDirective,
    SubListDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LinkModule
  ],
  exports: [
    ListComponent,
    ListItemComponent,
    NavListCssDirective,
    ExpandableDirective,
    HasSubDirective,
    SubListDirective
  ],
  providers: [ExpandableService, ListGroupActiveService]

})
export class ListModule { }
// export * from './list';
