import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 'fit-content',
  },
  information: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 8,
    marginLeft: theme.spacing(1),
  },
  avatar: {
    width: 60,
    height: 60,
    marginLeft: theme.spacing(1),
  },
  name: {
    marginTop: theme.spacing(1),
  },
}));
