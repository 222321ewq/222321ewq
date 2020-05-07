import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import MaskedInput from 'react-text-mask';
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

// Test para colocar mascara no signup
// function InputCustomMask(props) {
//   const { inputRef, type, ...other } = props;
//   let mask = [];
//   switch (type) {
//     case 'phone':
//       mask = [
//         '(',
//         /[0-9]/,
//         /[0-9]/,
//         ')',
//         ' ',
//         /[0-9]/,
//         /[0-9]/,
//         /[0-9]/,
//         /[0-9]/,
//         '-',
//         /[0-9]/,
//         /[0-9]/,
//         /[0-9]/,
//         /[0-9]/,
//       ];
//       break;
//     case 'cpf':
//       mask = [
//         /[0-9]/,
//         /[0-9]/,
//         /[0-9]/,
//         '.',
//         /[0-9]/,
//         /[0-9]/,
//         /[0-9]/,
//         '.',
//         /[0-9]/,
//         /[0-9]/,
//         /[0-9]/,
//         '-',
//         /[0-9]/,
//         /[0-9]/,
//       ];
//       break;
//   }
//   return (
//     <MaskedInput
//       {...other}
//       ref={ref => {
//         inputRef(ref ? ref.inputElement : null);
//       }}
//       mask={mask}
//       placeholderChar={'\u2000'}
//     />
//   );
// }

export default function SignUpForm({ handleUpdateAuth, handleSignUp }) {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            autoComplete="fname"
            name="name"
            variant="outlined"
            required
            fullWidth
            id="name"
            label="Nome Completo"
            autoFocus
            onChange={handleUpdateAuth}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="phone"
            label="Telefone"
            name="phoneNumber"
            autoComplete="phoneNumber"
            onChange={handleUpdateAuth}
            // InputProps={{
            //   inputComponent: InputCustomMask,
            //   type: 'phone',
            // }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="cpf"
            label="CPF"
            name="cpf"
            autoComplete="cpf"
            onChange={handleUpdateAuth}
            // InputProps={{
            //   inputComponent: InputCustomMask,
            //   type: 'cpf',
            // }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Endereço de email"
            name="email"
            autoComplete="email"
            onChange={handleUpdateAuth}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="oab"
            label="Número da OAB"
            name="oab"
            autoComplete="oab"
            onChange={handleUpdateAuth}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleUpdateAuth}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="passwordtjsp"
            label="Senha do TJSP"
            type="password"
            id="passwordtjsp"
            autoComplete="current-password"
            onChange={handleUpdateAuth}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleSignUp}
      >
        Registrar-se
      </Button>
      <Grid container justify="flex-end">
        {/* <Grid item>
          Já tem uma conta da Simple Juris?{' '}
          <Button color="primary" style={{ border: '#3f51b5' }}>
            Entrar
          </Button>
        </Grid> */}
      </Grid>
    </form>
  );
}
