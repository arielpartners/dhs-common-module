import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';
import { DropdownReducer } from '../../lib/menu';

export const RootReducer = combineReducers({
  router: routerReducer,
  header: DropdownReducer
})
