const styles = theme => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    transition: '0.2s',

    [theme.breakpoints.down(450)]: {
      flexDirection: 'column',
    },
  },

  padding: {
    paddingRight: 20,

    [theme.breakpoints.down(450)]: {
      paddingRight: 0,
    },
  },
});

export default styles;
