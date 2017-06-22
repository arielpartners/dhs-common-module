import { Directive, HostListener } from '@angular/core';
import { AuthService } from './auth.service';

@Directive({
  selector: '[dhsLogoutBtn], [dhs-logout-btn], [logoutBtn], [logout-btn]'
})

export class LogoutButtonDirective {
  constructor(
    private service: AuthService
  ) {}

  @HostListener('click') onClick() {
    this.service.logout();
  }
}
