import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    flexWrap: 'wrap',
    display: 'inline-block',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: 0,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  gridItem: {
    paddingTop: 0,
    paddingBottom: 15,
    paddingLeft: 20,
  },
  spanText: {
    verticalAlign: -25,
    fontSize: '1.2em',
    fontWeight: 'bold',
  },
}));
