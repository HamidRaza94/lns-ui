const styles = theme => ({
  root: {
    margin: '20px 200px',
    padding: 15,
    borderRadius: 10,
    boxShadow: '0px 0px 5px #565656',
    backgroundColor: 'white',
    transition: '0.2s',

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
  },

  stepper: {
    paddingLeft: 0,
    paddingRight: 0,
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight: 10,
    transition: '0.2s',

    [theme.breakpoints.down(450)]: {
      paddingLeft: 5,
      paddingRight: 5,
    },
  },

  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 10,

    [theme.breakpoints.down(450)]: {
      paddingLeft: 5,
      paddingRight: 5,
    },
  },
});

export default styles;
