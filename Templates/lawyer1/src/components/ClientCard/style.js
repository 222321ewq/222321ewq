import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  card: {
    minWidth: 260,
  },
  cardContent: {
    padding: 6,
    '&:last-child': {
      paddingBottom: 6,
    },
    textAlign: 'left',
  },

  gridItem: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },

  badge: {
    position: 'absolute',
    top: '20px',
    left: '70px',
  },

  avatar: {
    margin: 10,
    width: 70,
    height: 70,
    backgroundColor: '#576CA8',
  },

  clientName: {
    margin: 0,
    marginTop: 10,
    fontWeight: 'bold',
  },

  processNumber: {
    fontSize: '0.9em',
    color: 'grey',
  },
});
