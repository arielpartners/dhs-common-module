import { Injectable } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { ItemActions } from '../ajax/item/item.actions';
import { ITEM_TYPES } from '../ajax/item/item.types';
import { LOGGED_OUT } from '../core.type';

@Injectable()
export class AuthService {

  constructor(
    private store: NgRedux<any>,
    private itemAction: ItemActions
  ) {}

  get authenticated(): boolean {
    return !!localStorage.getItem('reduxPersist:token');
  }

  get token(): string|boolean {
    return JSON.parse(localStorage.getItem('reduxPersist:token'));
  }

  setAuthorizationBearer() {
    const { token } = this;
    (function(open) {
      XMLHttpRequest.prototype.open = function () {
        open.apply(this, arguments);
        this.setRequestHeader('Authorization', 'Bearer ' + token);
        this.setRequestHeader('content-type', 'application/json; charset=utf-8');
      };
    })(XMLHttpRequest.prototype.open);
  }

  login(email: string, password: string) {
    this.store.dispatch(this.itemAction.submitForm(ITEM_TYPES.TOKEN, { auth: { email, password, }}));
  }

  logout() {
    localStorage.clear();
    this.store.dispatch({type: LOGGED_OUT});
  }
}
