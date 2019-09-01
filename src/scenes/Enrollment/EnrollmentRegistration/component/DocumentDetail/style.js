const styles = theme => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    transition: '0.2s',
    paddingTop: 10,
    paddingBottom: 10,

    [theme.breakpoints.down(450)]: {
      flexDirection: 'column',
    },
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },

  flexStart: {
    justifyContent: 'flex-start',
  },

  padding: {
    paddingRight: 20,

    [theme.breakpoints.down(450)]: {
      paddingRight: 0,
    },
  },
});

export default styles;
