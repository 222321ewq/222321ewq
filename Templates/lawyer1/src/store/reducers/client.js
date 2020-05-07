import { ClientTypes } from '../actions/types';
const INITIAL_STATE = {
  advogado: null,
  clientes: [],
  loading: false,
  error: null,
};

export default function client(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ClientTypes.GET_CLIENT_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ClientTypes.GET_CLIENT_SUCCESS:
      return {
        ...state,
        advogado: action.payload.advogado,
        clientes: action.payload.clientes,
        loading: false,
        error: null,
      };
    case ClientTypes.GET_CLIENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ClientTypes.LOAD_PROCESS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case ClientTypes.LOAD_PROCESS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ClientTypes.LOAD_PROCESS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
