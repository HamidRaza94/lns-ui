const style = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: '5px 0px',

    [theme.breakpoints.down(1000)]: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  },
});

export default style;
