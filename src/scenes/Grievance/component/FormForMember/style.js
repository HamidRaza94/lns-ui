const style = (theme) => ({
  root: {
    margin: '20px 200px',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

    [theme.breakpoints.down(1115)]: {
      marginLeft: 150,
      marginRight: 150,
    },

    [theme.breakpoints.down(1015)]: {
      marginLeft: 100,
      marginRight: 100,
    },

    [theme.breakpoints.down(915)]: {
      marginLeft: 50,
      marginRight: 50,
    },

    [theme.breakpoints.down(815)]: {
      marginLeft: 20,
      marginRight: 20,
    },

    [theme.breakpoints.down(750)]: {
      marginLeft: 10,
      marginRight: 10,
    },

    [theme.breakpoints.down(620)]: {
      flexDirection: 'column',
    },
  },

  field: {
    width: '50%',
    padding: 5,

    '& label': {
      padding: 5,
    },
  },

  margin: {
    margin: theme.spacing(1),
  },

  extendedIcon: {
    marginRight: theme.spacing(1),
  },
});

export default style;
