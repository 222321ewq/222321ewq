import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },

  circleBarContainer: {
    width: 80,
    float: 'left',
    paddingRight: 10,
  },

  textContainer: {
    paddingTop: 10,
  },

  gridItem: {
    textAlign: 'left',
    flexGrow: 1,
    paddingLeft: 40,
  },
}));
