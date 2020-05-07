import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import { useStyles } from './style';

export default function ClientCard({ client, handleModalOpen }) {
  const styles = useStyles();

  const formatDate = dateReceived => {
    console.log(dateReceived);
    let dateReceivedDate = new Date(dateReceived);
    dateReceivedDate.setDate(dateReceivedDate.getDate() + 1);
    const dateReceivedStr = dateReceivedDate.toLocaleDateString('pt-BR');

    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    const todayDateStr = `${dd}/${mm}/${yyyy}`;

    today.setDate(today.getDate() - 1);
    dd = today.getDate();
    mm = today.getMonth() + 1;
    yyyy = today.getFullYear();

    const yesterdayDateStr = `${dd}/${mm}/${yyyy}`;
    if (todayDateStr === dateReceivedStr) {
      return <div>Hoje</div>;
    } else if (yesterdayDateStr === dateReceivedStr) {
      return <div>Ontem</div>;
    } else {
      return <div>{dateReceivedStr}</div>;
    }
  };
  return (
    <Grid key={client.id} item className={styles.gridItem} lg={4} md={5}>
      {/* ButtonBase cover Card component to make it clickable */}
      {/* <ButtonBase onClick={() => handleModalOpen(true)}> */}
      <ButtonBase onClick={() => handleModalOpen(true, client)}>
        <Card className={styles.card}>
          {/* Card Content */}
          <CardContent className={styles.cardContent}>
            <Grid container direction="row">
              {/* Client avatar */}
              <Grid item xs={4}>
                <Badge
                  color="secondary"
                  badgeContent={client.notifications}
                  className={styles.badge}
                >
                  <span />
                </Badge>
                {/* <span> inside Badge is to avoid error message */}
                {client.avatar ? (
                  <Avatar alt="Avatar" src={client.avatar} className={styles.avatar} />
                ) : (
                  <Avatar className={styles.avatar}>{client.nome.charAt(0)}</Avatar>
                )}
              </Grid>
              {/* Client name and description */}
              <Grid item xs={8}>
                <Grid>
                  <Grid item xs={12} component="h2" className={styles.clientName}>
                    {client.nome}
                  </Grid>
                  <Grid item xs={12} component="p" className={styles.processNumber}>
                    {client.processo.numero}
                    {/* 0157062-80.2012.8.26.0100 */}
                  </Grid>
                  <Grid item xs={12} component="p">
                    <b>Última Movimentação:</b> <br />
                    {client.ultima_movimentacao.nome}
                    {/* Remetidos os Autos para o Cartório Distribuidor Local para Redistribuição */}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    component="p"
                    style={{
                      textAlign: 'right',
                      paddingRight: 5,
                      paddingBottom: 5,
                      fontWeight: 'bold',
                    }}
                  >
                    {/* {client.date} */}
                    {formatDate(client.ultima_movimentacao.data)}

                    {/* {date(currentDate, dateReceived)} */}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </ButtonBase>
    </Grid>
  );
}

ClientCard.propTypes = {
  client: PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
    notifications: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
};
