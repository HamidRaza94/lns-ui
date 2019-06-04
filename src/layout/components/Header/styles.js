// import useMediaQuery from '@material-ui/core/useMediaQuery';

export const styles = theme => ({
  root: {
    padding: '0px 50px',
    backgroundColor: '#ffffff',
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  },

  header: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },

  lns: {
    width: 140,
    height: 140,
    [theme.breakpoints.down('sm')]: {
      width: 110,
      height: 110
    },
    margin: '5px 5px 5px 5px',
    cursor: 'pointer'
  },

  gandhi150: {
    width: 200,
    height: 110
  },

  swatchBharat: {
    width: 150,
    height: 80
  },

  title: {
    fontWeight: 'bold',
    fontSize: 15,
    fontFamily: 'Arial, Helvetica, sans-serif',
    [theme.breakpoints.down('sm')]: {
      fontSize: 12
    }
  }
});
