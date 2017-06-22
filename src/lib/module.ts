import { ModuleWithProviders, NgModule } from '@angular/core';
import { IconModule } from './icon/icon.module';
import { MenuModule } from './menu/menu.module';
import { ListModule } from './list/list.module';
import { TextModule } from './text/text.module';
import { LinkModule } from './link/link.module';
import { BadgeModule } from './badge/badge.module';
import { UtilityModule } from './utils/utils.module';
import {AuthModule} from './auth/auth.module';
import {AjaxItemModule} from './ajax/item/item.module';

const DHS_UI_MODULES = [
  AuthModule,
  AjaxItemModule,
  IconModule,
  MenuModule,
  ListModule,
  TextModule,
  LinkModule,
  BadgeModule,
  UtilityModule
];

@NgModule({
  imports: [...DHS_UI_MODULES],
  exports: DHS_UI_MODULES
})

export class DHSModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DHSModule,
      providers: []
    };
  }
}
