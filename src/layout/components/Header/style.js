const style = theme => ({
  root: {
    padding: '0px 50px',
    backgroundColor: '#f2944d',
    transition: '0.2s',

    [theme.breakpoints.down(1050)]: {
      padding: '0px 40px'
    },
    [theme.breakpoints.down(1030)]: {
      padding: '0px 30px'
    },
    [theme.breakpoints.down(1010)]: {
      padding: '0px 20px'
    },
    [theme.breakpoints.down(985)]: {
      padding: '0px 10px'
    }
  },

  header: {
    [theme.breakpoints.down(965)]: {
      // display: 'none'
    }
  },

  lns: {
    width: 140,
    height: 140,
    margin: '5px 5px 5px 5px',
    cursor: 'pointer',
    transition: '0.2s',

    [theme.breakpoints.down(985)]: {
      width: 110,
      height: 110
    },

    [theme.breakpoints.down(940)]: {
      width: 90,
      height: 90
    }
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Arial, Helvetica, sans-serif',
    transition: '0.2s',

    [theme.breakpoints.down(985)]: {
      fontSize: 17
    },

    [theme.breakpoints.down(940)]: {
      fontSize: 16
    }
  },

  gandhi150: {
    width: 200,
    height: 110,
    transition: '0.2s',

    [theme.breakpoints.down(985)]: {
      width: 180,
      height: 100
    },

    [theme.breakpoints.down(940)]: {
      width: 160,
      height: 90
    },

    [theme.breakpoints.down(940)]: {
      width: 140,
      height: 65
    },

    [theme.breakpoints.down(775)]: {
      display: 'none'
    }
  },

  swatchBharat: {
    width: 150,
    height: 80,
    transition: '0.2s',

    [theme.breakpoints.down(985)]: {
      width: 130,
      height: 65
    },

    [theme.breakpoints.down(940)]: {
      width: 110,
      height: 50
    },

    [theme.breakpoints.down(640)]: {
      display: 'none'
    }
  },

  codeIndia: {
    transition: '0.2s',

    [theme.breakpoints.down(530)]: {
      display: 'none'
    }
  }
});

export default style;
