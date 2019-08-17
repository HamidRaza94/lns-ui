const style = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f2944d',
    padding: '10px 40px',
    transition: '0.2s',

    [theme.breakpoints.down(580)]: {
      paddingLeft: 10,
      paddingRight: 10,
    },
    [theme.breakpoints.down(485)]: {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 5,
      paddingRight: 5,
    },
  },

  leftHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0px 10px',
    width: 500,
    height: 160,

    [theme.breakpoints.down(485)]: {
      height: 140,
    },

    [theme.breakpoints.down(400)]: {
      height: 120,
    },
  },

  logoImage: {
    width: 140,
    height: 140,
    cursor: 'pointer',
    transition: '0.2s',

    [theme.breakpoints.down(485)]: {
      width: 120,
      height: 120,
    },

    [theme.breakpoints.down(400)]: {
      width: 100,
      height: 100,
    },
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Arial, Helvetica, sans-serif',
    transition: '0.2s',

    [theme.breakpoints.down(510)]: {
      fontSize: 17,
    },

    [theme.breakpoints.down(485)]: {
      fontSize: 16,
    },

    [theme.breakpoints.down(450)]: {
      fontSize: 15,
    },
  },

  rightHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
    [theme.breakpoints.down(720)]: {
      display: 'none',
    },
  },

  gandhi150: {
    width: 200,
    height: 110,
    transition: '0.2s',

    [theme.breakpoints.down(1090)]: {
      display: 'none',
    },
  },

  swatchBharat: {
    width: 150,
    height: 80,
    transition: '0.2s',

    [theme.breakpoints.down(890)]: {
      display: 'none',
    },
  },

  codeIndia: {
    width: 150,
    height: 80,
    transition: '0.2s',

    [theme.breakpoints.down(740)]: {
      display: 'none',
    },
  }
});

export default style;
