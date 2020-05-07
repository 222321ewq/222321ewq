import React, { useState } from 'react';
import { Button, TextField, FormControlLabel, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginForm({ handleUpdateAuth, handleLogin }) {
  const classes = useStyles();

  return (
    <form onSubmit={handleLogin} className={classes.form} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={handleUpdateAuth}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Senha"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={handleUpdateAuth}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Lembrar de mim"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleLogin}
      >
        Entrar
      </Button>
    </form>
  );
}
