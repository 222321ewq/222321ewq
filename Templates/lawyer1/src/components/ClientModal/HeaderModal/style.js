import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  headerContainer: {
    background: 'linear-gradient(to left, #40547c, #254380)',
    color: 'white',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 4, 3),
    textAlign: 'center',
  },
  bigAvatar: {
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 80,
    height: 80,
    backgroundColor: '#576CA8',
  },
  smallDescription: {
    fontSize: 12,
    textAlign: 'center',
  },
  gridItem: {
    padding: theme.spacing(1),
    borderRight: '0.5px solid white',
  },
  gridItemWithoutBorder: {
    padding: theme.spacing(1),
    borderRight: 'none',
  },
  link: {
    color: '#4d4d4d',
    textDecoration: 'none',
  },

  linkSelected: {
    color: '#1e467d',
    textDecoration: 'none',
  },
  iconBottom: {
    verticalAlign: 'bottom',
  },
  clientName: {
    marginTop: 4,
  },
  linkGridItem: {
    textAlign: 'center',
    flexGrow: 1,
  },
  processNumber: {
    marginBottom: 0,
  },
  headerTitleContainer: {
    paddingTop: 10,
    marginTop: 0,
    marginBottom: 3,
    fontWeight: 'normal',
  },
}));
