const styles = theme => ({
  root: {
    width: '60%',
    margin: '0 auto',
    marginTop: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    boxShadow: '0px 0px 5px #565656',
    backgroundColor: 'white',
    transition: '0.2s',

    [theme.breakpoints.down(1000)]: {
      width: '70%'
    },
    [theme.breakpoints.down(850)]: {
      width: '80%'
    },
    [theme.breakpoints.down(750)]: {
      width: '90%',
      paddingLeft: 10,
      paddingRight: 10,
    },
    [theme.breakpoints.down(650)]: {
      width: '95%',
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0px 20px',
  },

  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 10
  },

  name: {
    margin: 20,
  },
});

export default styles;
