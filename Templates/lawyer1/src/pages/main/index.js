import React, { Fragment, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MiniDrawer from '../../components/MiniDrawer';
import FloatingAddIcon from '../../components/AddButton';
import ClientCard from '../../components/ClientCard';
import StatisticCircle from '../../components/StatisticCircle';
import ClientFilter from '../../components/ClientFilter';
import ClientModal from '../../components/ClientModal';
import { Hidden, Grid } from '@material-ui/core';
import { getLawsuit, updateLawsuits } from '../../store/actions/lawsuit';
import ButtonBase from '@material-ui/core/ButtonBase';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getClients, loadProcesses } from '../../store/actions/client';
import { logout } from '../../store/actions/auth';
import handleViewport from 'react-in-viewport';

import { useStyles } from './style';

const ViewportBlock = handleViewport(ClientCard /** options: {}, config: {} **/);

export default function Main(props) {
  const classes = useStyles();
  const [modalOpened, setOpenModal] = React.useState(false);
  const dispatch = useDispatch();
  const clientState = useSelector(state => state.client);
  const authState = useSelector(state => state.auth);
  const lawsuits = useSelector(state => state.lawsuit);
  const [searchString, setSearchString] = useState('');

  React.useEffect(() => {
    if (authState.registering) {
      dispatch(loadProcesses(authState.id, authState.oab));
    } else {
      dispatch(getClients(authState.id));
    }
  }, []);

  function handleLogout() {
    dispatch(logout(props.history));
  }

  function handleUpdateLawsuits() {
    dispatch(updateLawsuits(authState.id));
  }

  function handleModalOpen(isOpen, client) {
    if (isOpen) {
      dispatch(getLawsuit(client.processo.id, client.nome, client.avatar));
    }
    setOpenModal(isOpen);
  }
  return (
    <Fragment>
      {!authState.registering ? (
        <div className={classes.root}>
          {/* MiniDrawer */}
          <MiniDrawer
            updateLoading={lawsuits.updateLoading}
            handleUpdateLawsuits={handleUpdateLawsuits}
            handleLogout={handleLogout}
          />
          {/* Main Content */}
          <main className={classes.content}>
            <div className={classes.toolbar} />

            {/* StatisticCircle */}
            <Hidden smDown>
              <Grid container spacing={3}>
                <StatisticCircle
                  value={30}
                  color="#ff426e"
                  description="Dos seus clientes são mulheres"
                />
                <StatisticCircle
                  value={10}
                  color="#4077d6"
                  description="Dos seus clientes são já realizaram pagamento"
                />
                <StatisticCircle
                  value={92}
                  color="#49e393"
                  description="Dos seus clientes são Já foram contactados"
                />
              </Grid>
            </Hidden>
            <Grid container spacing={2}>
              {/* ClientFilter */}
              <ClientFilter />
              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <span className={classes.spanText}>Buscar </span>
                <FormControl>
                  <InputLabel htmlFor="component-simple"> </InputLabel>
                  <Input
                    id="component-simple"
                    value={searchString}
                    onChange={e => {
                      setSearchString(e.target.value);
                    }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            {/* ClientCards */}
            <Grid container spacing={2}>
              {clientState.clientes.length > 0 ? (
                clientState.clientes.map((client, index) => {
                  if (
                    client.nome.includes(searchString) ||
                    client.processo.numero.includes(searchString) ||
                    client.ultima_movimentacao.nome.includes(searchString) ||
                    client.ultima_movimentacao.data.includes(searchString)
                  ) {
                    return (
                      <ClientCard key={index} client={client} handleModalOpen={handleModalOpen} />
                    );
                  }
                })
              ) : (
                <div></div>
              )}
            </Grid>
          </main>
        </div>
      ) : (
        // Loading screen
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={12} style={{ textAlign: 'center' }}>
            <CircularProgress size={200} />
            <h1>
              O nosso robô está buscando seus processos, este procedimento pode demorar entre 5 à 10
              minutos
            </h1>
          </Grid>
        </Grid>
      )}
      {/* ClientModal */}
      <ClientModal
        modalOpened={modalOpened}
        handleModalOpen={handleModalOpen}
        lawsuits={lawsuits}
      />
      {/* ADDBUTTON */}
      <Grid container direction="collumn" justify="flex-end" alignItems="buttom">
        <FloatingAddIcon className={classes.button} />
      </Grid>
    </Fragment>
  );
}
