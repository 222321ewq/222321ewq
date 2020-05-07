import { LawsuitTypes } from './types';
import api from '../../services/api';
import { getClients } from '../../store/actions/client';

export const getLawsuit = (Lawsuit_nr, client_nome, client_avatar) => {
  return dispatch => {
    dispatch(getLawsuitStarted());
    return api
      .get(`/processo/${Lawsuit_nr}`)
      .then(response => {
        dispatch(getLawsuitSuccess(response.data, client_nome, client_avatar));
        console.log('buscando processo ...');
        console.log(response.data);
        console.log(response.data.id);
      })
      .catch(error => {
        dispatch(getLawsuitFailure(error));
        console.log(error);
      });
  };
};

export const getLawsuitStarted = () => {
  return {
    type: LawsuitTypes.GETLAWSUIT_STARTED,
  };
};

export const getLawsuitSuccess = (data, client_nome, client_avatar) => {
  return {
    type: LawsuitTypes.GETLAWSUIT_SUCCESS,
    payload: {
      data,
      client_nome,
      client_avatar,
    },
  };
};

export const getLawsuitFailure = error => {
  return {
    type: LawsuitTypes.GETLAWSUIT_FAILURE,
    error,
  };
};

export const updateLawsuits = lawyerId => {
  return dispatch => {
    dispatch(updateLawsuitsStarted());
    console.log('updatelawsuit started');
    return api
      .put(`/advogado/${lawyerId}/processos`)
      .then(response => {
        dispatch(updateLawsuitsSuccess());
        dispatch(getClients(lawyerId));
        console.log('updatelawsuit success');
        console.log(response);
      })
      .catch(error => {
        dispatch(updateLawsuitsFailure(error));
        console.log(error);
      });
  };
};

export const updateLawsuitsStarted = () => {
  return {
    type: LawsuitTypes.UPDATE_LAWSUITS_STARTED,
  };
};

export const updateLawsuitsSuccess = () => {
  return {
    type: LawsuitTypes.UPDATE_LAWSUITS_SUCCESS,
  };
};

export const updateLawsuitsFailure = error => {
  return {
    type: LawsuitTypes.UPDATE_LAWSUITS_FAILURE,
    error,
  };
};
