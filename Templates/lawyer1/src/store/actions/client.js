import { ClientTypes } from './types';
import api from '../../services/api';
import { changeRegistering } from '../actions/auth';

export const loadProcesses = (lawyerId, oab) => {
  return dispatch => {
    console.log('loadProcesses started');
    dispatch(loadProcessesStarted());
    return api
      .get(`/processo/advogado/${oab}`)
      .then(response => {
        console.log('loadProcesses success');
        dispatch(loadProcessesSuccess());
        dispatch(getClients(lawyerId));
      })
      .catch(error => {
        console.log('loadProcesses failed');
        dispatch(loadProcessesFailed(error));
      });
  };
};

export const loadProcessesStarted = () => {
  return {
    type: ClientTypes.LOAD_PROCESSES_STARTED,
  };
};

export const loadProcessesSuccess = (clientes, advogado) => {
  return {
    type: ClientTypes.LOAD_PROCESSES_SUCCESS,
  };
};
export const loadProcessesFailed = error => {
  return {
    type: ClientTypes.LOAD_PROCESSES_FAILURE,
    payload: {
      error,
    },
  };
};

export const getClients = lawyerId => {
  return dispatch => {
    console.log('getClient started');
    dispatch(getClientStarted());
    return api
      .get(`/advogado/${lawyerId}/clientes`)
      .then(response => {
        const clientes = response.data.clientes;
        const advogado = response.data.advogado;
        console.log('getClient success: clients: ');
        console.log(clientes);
        dispatch(getClientSuccess(clientes, advogado));
        dispatch(changeRegistering(false));
      })
      .catch(error => {
        console.log('getClient failed');
        dispatch(getClientsFailed(error));
      });
  };
};

export const getClientStarted = () => {
  return {
    type: ClientTypes.GET_CLIENT_STARTED,
  };
};

export const getClientSuccess = (clientes, advogado) => {
  return {
    type: ClientTypes.GET_CLIENT_SUCCESS,
    payload: {
      clientes,
      advogado,
    },
  };
};
export const getClientsFailed = error => {
  return {
    type: ClientTypes.GET_CLIENT_FAILURE,
    payload: {
      error,
    },
  };
};
