import { ModuleWithProviders, NgModule } from '@angular/core';
import { IconModule } from './icon/icon.module';
import { MenuModule } from './menu/menu.module';
import { ListModule } from './list/list.module';
import { TextModule } from './text/text.module';
import { LinkModule } from './link/link.module';

const CAPDASH2_UI_MODULES = [
  IconModule,
  MenuModule,
  ListModule,
  TextModule,
  LinkModule
];

@NgModule({
  imports: [...CAPDASH2_UI_MODULES],
  exports: CAPDASH2_UI_MODULES
})

export class CapDashModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CapDashModule,
      providers: []
    };
  }
}
