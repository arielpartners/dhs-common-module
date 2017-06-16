import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule } from '@angular-redux/store';
import { LinkModule } from '../link';
import { MenuComponent, MenuHeaderComponent } from './menu.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { CommonModule } from '@angular/common';
import { DropdownService } from './dropdown/dropdown.service';
import { DropdownActions } from './dropdown/dropdown.actions';
import { CloseToggleDirective } from './dropdown/dropdown.directive';

@NgModule({
  declarations: [
    MenuComponent,
    MenuButtonComponent,
    MenuHeaderComponent,
    MenuItemComponent,
    CloseToggleDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgReduxModule,
    LinkModule,
  ],
  providers: [
    DropdownService,
    DropdownActions,
  ],
  exports: [
    MenuComponent,
    MenuHeaderComponent,
    MenuButtonComponent,
    CloseToggleDirective,
    MenuItemComponent
  ],
})
export class MenuModule {}
