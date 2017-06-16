import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule } from '@angular-redux/store';
import { RouterModule } from '@angular/router';
import { MenuComponent, MenuHeaderComponent } from './menu.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { CommonModule } from '@angular/common';
import { DropdownService } from './dropdown/dropdown.service';
import { DropdownActions } from './dropdown/dropdown.actions';
import { CloseToggleDirective, DropdownDirective } from './dropdown/dropdown.directive';


@NgModule({
  declarations: [
    MenuComponent,
    MenuButtonComponent,
    MenuHeaderComponent,
    MenuItemComponent,
    CloseToggleDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgReduxModule,
    RouterModule,
  ],
  providers: [
    DropdownService,
    DropdownActions,
  ],
  exports: [
    MenuComponent,
    MenuHeaderComponent,
    MenuButtonComponent,
    MenuItemComponent,
    CloseToggleDirective,
    DropdownDirective
  ],
})
export class MenuModule {}
