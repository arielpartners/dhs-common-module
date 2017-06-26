import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NgReduxModule } from '@angular-redux/store';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AjaxItemModule } from '../ajax/item/item.module';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { LogoutButtonDirective } from './auth.directive';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutButtonDirective
  ],
  imports: [
    AjaxItemModule,
    CommonModule,
    NgReduxModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    AuthService
  ],
  exports: [
    LoginComponent,
    LogoutButtonDirective
  ]
})
export class AuthModule {}
