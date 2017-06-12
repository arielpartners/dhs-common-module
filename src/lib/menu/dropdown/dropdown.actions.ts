import { Injectable } from '@angular/core';

@Injectable()
export class DropdownActions {
  static readonly TOGGLE = 'TOGGLE';

  openToggle(menuId) {
    return {
      type: DropdownActions.TOGGLE,
      payload: {
        isToggled: true,
        selectedDropdown: menuId
      }
    };
  }

  closeToggle() {
    return {
      type: DropdownActions.TOGGLE,
      payload: {
        isToggled: false,
        selectedDropdown: ''
      }
    };
  }
}
