import { LawsuitTypes } from '../actions/types';

const INITIAL_STATE = {
  id: '',
  client_nome: '',
  client_avatar: '',
  numero_processo: '',
  area: '',
  classe: '',
  assunto: '',
  outros_assuntos: '',
  distribuicao: '',
  controle: '',
  nome_juiz: '',
  valor: '',
  status: '',
  audiencias: [],
  movimentacoes: [],
  created_at: '',
  updated_at: '',
  loading: false,
  updateLoading: false,
  error: '',
};

export default function lawysuit(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LawsuitTypes.GETLAWSUIT_STARTED:
      return {
        ...state,
        loading: true,
      };

    case LawsuitTypes.GETLAWSUIT_SUCCESS:
      return {
        ...state,
        id: action.payload.data.id,
        numero_processo: action.payload.data.numero_processo,
        client_nome: action.payload.client_nome,
        client_avatar: action.payload.client_avatar,
        area: action.payload.data.area,
        classe: action.payload.data.classe,
        assunto: action.payload.data.assunto,
        outros_assuntos: action.payload.data.outros_assuntos,
        distribuicao: action.payload.data.distribuicao,
        controle: action.payload.data.controle,
        nome_juiz: action.payload.data.nome_juiz,
        valor: action.payload.data.valor,
        status: action.payload.data.status,
        audiencias: action.payload.data.audiencias,
        movimentacoes: action.payload.data.movimentacoes,
        created_at: action.payload.data.created_at,
        updated_at: action.payload.data.updated_at,
        loading: false,
      };

    case LawsuitTypes.GETLAWSUIT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case LawsuitTypes.UPDATE_LAWSUITS_STARTED:
      return {
        ...state,
        updateLoading: true,
      };
    case LawsuitTypes.UPDATE_LAWSUITS_SUCCESS:
      return {
        ...state,
        updateLoading: false,
      };
    case LawsuitTypes.UPDATE_LAWSUITS_FAILURE:
      return {
        ...state,
        updateLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
