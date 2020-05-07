import { AuthTypes } from './types';
import api from '../../services/api';

export const login = (auth, history) => {
  return dispatch => {
    console.log('login started');
    dispatch(loginStarted());
    return api
      .post(`/advogado/login`, { email: auth.email, senha: auth.password })
      .then(response => {
        const token = response.data.token;
        const id = response.data.id;
        console.log('login success: token: ' + token);
        dispatch(loginSuccess(token, id));
        // store token in a cookie
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        // navigate to main page
        history.push('/');
      })
      .catch(error => {
        console.log('login failed');
        dispatch(loginFailed(error));
      });
  };
};

export const loginStarted = () => {
  return {
    type: AuthTypes.LOGIN_STARTED,
  };
};

export const loginSuccess = (token, id) => {
  return {
    type: AuthTypes.LOGIN_SUCCESS,
    payload: {
      token,
      id,
    },
  };
};
export const loginFailed = error => {
  return {
    type: AuthTypes.LOGIN_FAILURE,
    payload: {
      error,
    },
  };
};

export const signup = (auth, history) => {
  console.log(auth);
  return dispatch => {
    console.log('signup started');
    dispatch(signupStarted());
    return api
      .post(`/advogado/signup`, {
        email: auth.email,
        senha: auth.password,
        senha_oab: auth.passwordtjsp,
        nome: auth.name,
        numero_oab: auth.oab,
        cpf: auth.cpf,
        telefone: auth.phone,
      })
      .then(response => {
        const token = response.data.token;
        const id = response.data.id;

        console.log('signup success');
        dispatch(signupSuccess(token, id));
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        // navigate to main page
        history.push('/');
      })
      .catch(error => {
        console.log('signup failed');
        console.log('error: ' + error);
        dispatch(signupFailed(error));
      });
  };
};

export const signupStarted = () => {
  return {
    type: AuthTypes.SIGNUP_STARTED,
  };
};

export const signupSuccess = (token, id) => {
  return {
    type: AuthTypes.SIGNUP_SUCCESS,
    payload: {
      token,
      id,
    },
  };
};

export const signupFailed = error => {
  return {
    type: AuthTypes.SIGNUP_FAILURE,
    payload: {
      error,
    },
  };
};

export const updateAuth = auth => ({
  type: AuthTypes.UPDATE,
  auth,
});

// logout works removing the token and navigating user to login page
// and then erase his auth state
export const logout = history => {
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  history.push('/login');
  return {
    type: AuthTypes.LOGOUT,
  };
};

export const changeRegistering = boolean => {
  return {
    type: AuthTypes.CHANGE_REGISTERING,
    registering: boolean,
  };
};
