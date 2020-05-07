import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    overflowY: 'scroll',
    fontFamily: 'Open Sans',
    height: '100%',

    // Style to set modal width and height and keep it on center
    // margin: 0,
    // marginRight: 'auto',
    // marginLeft: 'auto',
    // maxWidth: '730px',
    // maxnHeight: '780px',
  },

  modalContent: {
    backgroundColor: 'white',
  },
  processCardContainer: {
    backgroundColor: 'white',
  },
}));
