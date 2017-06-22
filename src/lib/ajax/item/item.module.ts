import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemActions } from './item.actions';
import { ItemEpics } from './item.epics';
import { ItemService } from './item.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [CommonModule, HttpModule],
  providers: [ItemActions, ItemEpics, ItemService],
})
export class AjaxItemModule {}
