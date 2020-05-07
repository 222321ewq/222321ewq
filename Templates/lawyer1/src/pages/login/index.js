import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, CssBaseline, Link, Paper, Box, Grid, Typography, Button } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LoginForm from '../../components/LoginForm';
import SignUpForm from '../../components/SignUpForm';
// import { Creators as UsersCreators } from '../../store/ducks/users';
import { login, signup, updateAuth } from '../../store/actions/auth';
import useStyles from './styles';

const Login = props => {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  // To check if must show login or signup form
  const [isLoginForm, setIsLoginForm] = useState(true);

  const changeForm = e => {
    setIsLoginForm(!isLoginForm);
  };

  const handleLogin = e => {
    e.preventDefault();
    dispatch(login(auth, props.history));
  };

  const handleSignUp = e => {
    e.preventDefault();
    dispatch(signup(auth, props.history));
  };

  const handleUpdateAuth = e => {
    e.preventDefault();
    let newAuth = auth;
    newAuth[e.target.id] = e.target.value;
    dispatch(updateAuth(newAuth));
  };
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          {/* Form Title */}
          <Typography component="h1" variant="h5">
            {isLoginForm ? <span>Entrar</span> : <span>Registrar - se</span>}
          </Typography>
          {/* Login/Signup Forms */}
          {isLoginForm ? (
            <LoginForm handleUpdateAuth={handleUpdateAuth} handleLogin={handleLogin} />
          ) : (
            <SignUpForm handleSignUp={handleSignUp} handleUpdateAuth={handleUpdateAuth} />
          )}
          <Grid container>
            <Grid item xs style={{ marginTop: 7 }}>
              {/* When showing loginForm don't show "esqueceu a senha?"  */}
              {isLoginForm ? (
                <Link href="#" variant="body2">
                  Esqueceu a senha?
                </Link>
              ) : (
                <span></span>
              )}
            </Grid>
            <Grid item>
              {isLoginForm ? (
                <Typography>
                  Não tem uma conta?
                  <Button color="primary" variant="outlined" onClick={changeForm}>
                    Cadastre-se
                  </Button>
                </Typography>
              ) : (
                <Typography>
                  Já tem uma conta da Simple Juris?{' '}
                  <Button color="primary" variant="outlined" onClick={changeForm}>
                    Entrar
                  </Button>
                </Typography>
              )}
            </Grid>
          </Grid>
          <Box mt={5}>{/* Botar copyright */}</Box>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
