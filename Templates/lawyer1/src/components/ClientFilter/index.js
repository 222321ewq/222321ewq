import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import { useStyles } from './style';

export default function ClientFilter() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    categorie: 'ordem_alfabetica',
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <Grid className={classes.gridItem} item xs={6}>
      <span className={classes.spanText}>Seus clientes por </span>
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <Select
            value={values.categorie}
            onChange={handleChange}
            displayEmpty
            name="categorie"
            className={classes.selectEmpty}
          >
            <MenuItem value="ordem_alfabetica">Ordem Alfabética</MenuItem>
            <MenuItem value="idade">Idade</MenuItem>
            <MenuItem value="sexo">Sexo</MenuItem>
          </Select>
        </FormControl>
      </form>
    </Grid>
  );
}
