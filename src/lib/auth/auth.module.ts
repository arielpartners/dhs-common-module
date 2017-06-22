import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { LogoutButtonDirective } from './auth.directive';
import { AjaxItemModule } from '../ajax/item/item.module';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutButtonDirective
  ],
  imports: [
    CommonModule,
    AjaxItemModule,
    RouterModule,
    ReactiveFormsModule
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
