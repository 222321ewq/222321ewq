import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useStyles } from './style';

export default function HeaderModal({ value, subject, clientName, lawsuits, handleModalOpen }) {
  const classes = useStyles();

  function ChevronIcon({ color, side, size = 24 }) {
    const d =
      side === 'left'
        ? 'M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z'
        : 'M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z';
    return (
      <SvgIcon className={classes.iconBottom} style={{ fontSize: size }}>
        <path fill={color} d={d} />
      </SvgIcon>
    );
  }

  return (
    <div>
      <div className={classes.headerContainer}>
        {/* Client Process type */}
        <Grid container id="transition-modal-title" className={classes.headerTitleContainer}>
          {/* Exit modal icon */}
          <Grid item xs={1} component={ButtonBase} onClick={() => handleModalOpen(false)}>
            <ChevronIcon color="white" side="left" size={33} />
          </Grid>
          <Grid item xs={10}>
            <span>{lawsuits.area}</span>
            {/* <span>TRABALHISTA</span> */}
          </Grid>
          {/* Empty grid item to fix button on left side */}
          <Grid item xs={1}>
            <span></span>
          </Grid>
        </Grid>
        {/* Client Avatar */}
        <Avatar alt="Avatar do Usuário" src={lawsuits.client_avatar} className={classes.bigAvatar}>
          {lawsuits.client_nome.charAt(0)}
        </Avatar>
        {/* Client Name */}
        <h3 className={classes.clientName}>{lawsuits.client_nome}</h3>
        {/* Details */}
        <Grid container className={classes.details}>
          <Grid item xs={4} className={classes.gridItem}>
            1 <br />
            <span className={classes.smallDescription}>ações na justiça</span>
          </Grid>
          <Grid item xs={4} className={classes.gridItem}>
            {/* {value} <br /> */}
            {lawsuits.valor} <br />
            <span className={classes.smallDescription}>Pagamento esperado</span>
          </Grid>
          <Grid item xs={4} className={classes.gridItemWithoutBorder}>
            {/* {subject} <br /> */}
            {lawsuits.assunto} <br />
            <span className={classes.smallDescription}>Motivo do último processo</span>
          </Grid>
        </Grid>
      </div>
      {/* Links */}
      <div>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={4} className={classes.linkGridItem}>
            <Button className={classes.link}>Info</Button>
          </Grid>
          <Grid item xs={4} className={classes.linkGridItem}>
            <Button className={classes.linkSelected}>Movimentações</Button>
          </Grid>
          <Grid item xs={4} className={classes.linkGridItem}>
            <Button className={classes.link}>Documentos</Button>
          </Grid>
        </Grid>
        <Divider />
        {/* ProcessNumber */}
        <h4 className={classes.processNumber}>
          <ChevronIcon color="grey" side="left" />
          <span>Processo: {lawsuits.numero_processo}</span>
          {/* <span>Processo: {lawsuits.numero}</span> */}
          <ChevronIcon color="grey" side="right" />
        </h4>
      </div>
    </div>
  );
}
