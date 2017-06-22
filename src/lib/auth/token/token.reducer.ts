import { ItemActions } from '../../ajax/item/item.actions';
import { LOGGED_OUT } from '../../core.type';
// -------------------------------------------------------------------
// TOKEN STORE
// -------------------------------------------------------------------
/* eslint-disable indent */
export const TokenReducer = (state = null, {type, payload}) => {
  let jwt;
  switch (type) {

    case ItemActions.LOAD_SUCCEEDED:
      if (payload.jwt) {
        jwt = payload.jwt;
      } else {
        jwt = state;
      }
      break;

    case LOGGED_OUT:
      jwt = null;
      break;

    default:
      jwt = state;
  }

  return jwt;
};
