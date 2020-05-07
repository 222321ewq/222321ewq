import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    position: 'fixed',
    bottom: 10,
    right: 10,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
