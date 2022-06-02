import {
  LOGIN_SUCCESS,
  LOGIN_STARTED,
  LOGIN_FAILED,
} from '../../Redux.constants';
import {
  loginSuccess,
  loginStarted,
  loginFailed
} from './Helper';
import { INITIAL_STATE } from './initialState';

export default function Login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return loginSuccess(state, action.payload);
    case LOGIN_STARTED:
      return loginStarted(state, action.payload);
    case LOGIN_FAILED:
      return loginFailed(state, action.payload);
    default:
      return { ...state };
  }
}
