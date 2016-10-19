import Immutable from 'immutable'
import {ACTIONS} from '../constants'

const initialState = Immutable.Map({});

export default function loginReducer(state=initialState, action) {
  switch(action.type) {
    case ACTIONS.SUBMIT_LOGIN:
          return state.set('logging',true).set('id', action.id);
    case ACTIONS.LOGIN_SUCCESS:
          return state.set('logging',false).set('user',action.user);
    case ACTIONS.LOGIN_FAILURE:
          return state.set('logging',false);
    case ACTIONS.RESET_LOGIN:
          return Immutable.Map({});
    default:
          return state;

  }
}

