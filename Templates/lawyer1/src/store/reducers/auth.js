import { AuthTypes } from '../actions/types';
const INITIAL_STATE = {
  id: localStorage.getItem('id'),
  email: '',
  password: '',
  passwordtjsp: '',
  name: '',
  oab: '',
  cpf: '',
  phone: '',
  loading: false,
  registering: false, // flag to dispaly loading screen while getProcess
  token: '',
  error: null,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AuthTypes.LOGIN_STARTED:
      return {
        ...state,
        loading: true,
      };
    case AuthTypes.LOGIN_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token,
        loading: false,
        error: null,
      };
    case AuthTypes.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case AuthTypes.SIGNUP_STARTED:
      return {
        ...state,
        loading: true,
        registering: true,
      };
    case AuthTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token,
        loading: false,
        registering: true,
      };
    case AuthTypes.SIGNUP_FAILURE:
      return {
        id: '',
        email: '',
        password: '',
        passwordtjsp: '',
        name: '',
        oab: '',
        cpf: '',
        phone: '',
        loading: false,
        token: '',
        error: action.payload.error,
        registering: false,
      };

    case AuthTypes.UPDATE:
      return {
        ...state,
        email: action.auth.email,
        password: action.auth.password,
      };
    case AuthTypes.LOGOUT:
      return {
        id: '',
        email: '',
        password: '',
        passwordtjsp: '',
        name: '',
        oab: '',
        cpf: '',
        phone: '',
        loading: false,
        token: '',
        error: null,
      };
    case AuthTypes.CHANGE_REGISTERING:
      return {
        ...state,
        registering: action.registering,
      };
    default:
      return state;
  }
}
