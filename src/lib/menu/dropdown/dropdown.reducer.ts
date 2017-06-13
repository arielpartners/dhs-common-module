import { DropdownActions } from './dropdown.actions';
import { DropdownStateType } from './dropdown.type';

/* eslint-disable indent */
const initialState: DropdownStateType = {
  isToggled: false,
  selectedDropdown: ''
};

export const DropdownReducer = (state = initialState, { type, payload }) => {
  let newState = Object.assign({}, state);
  switch (type) {
    case DropdownActions.TOGGLE:
      newState = payload;
      break;

    default:
      newState = state;
  }
  return newState;
};
