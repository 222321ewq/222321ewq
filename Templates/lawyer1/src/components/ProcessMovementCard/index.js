import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import { Share, CloudDownload, CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles({
  card: {
    maxWidth: 676,
    margin: 5,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  date: {
    marginTop: '25%',
    textAlign: 'center',
    paddingBottom: '10%',
    paddingTop: '10%',
    fontSize: '20',
    fontWeight: 'bold',
  },
  icons: {},
  container: {
    width: 107,
    backgroundColor: '#D4D4D4',
    borderRadius: 10,
  },
  description: {
    marginTop: -6,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ movementation }) {
  const classes = useStyles();
  let movementationDate = new Date(movementation.data);
  movementationDate.setDate(movementationDate.getDate() + 1);
  const movementationDateStr = movementationDate.toLocaleDateString('pt-BR');
  React.useEffect(() => {
    console.log(movementation);
  });

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container direction="row" spacing={8}>
          <Grid item xs={2}>
            <div className={classes.container}>
              <Typography className={classes.date}>
                {movementationDateStr}
                {/* 19/12/19 */}
              </Typography>
            </div>
          </Grid>

          <Grid item xs={10} className={classes.content}>
            <Grid container spacing={4}>
              <Grid item xs={10}>
                <Typography variant="h6" component="h6">
                  {movementation.nome}
                  {/* Certidão de Publicação Expedida */}
                </Typography>
                <hr />
                <Typography variant="body2" component="p" className={classes.description}>
                  {movementation.relacao != '' ? 'Relação: ' + movementation.relacao : ''}
                  Número do Diário: {movementation.numero_diario}
                  Página: {movementation.pagina}
                  {/* Relação :0163/2019 Data da Disponibilização: 05/09/2019 Data da Publicação: */}
                  {/* 06/09/2019 Número do Diário: 2885 Página: 1272/1294 */}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <div className={classes.icons}>
                  <CardActions>
                    <Button size="small">
                      <Share />
                    </Button>
                  </CardActions>
                  <CardActions>
                    <Button size="small">
                      <CloudDownload />
                    </Button>
                  </CardActions>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
