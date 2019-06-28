const style = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.down(1000)]: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
});

export default style;
