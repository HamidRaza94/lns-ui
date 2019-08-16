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

  attachment: {
    // // position: 'absolute',
    // left: '3px',
    // top: '5px',
    // color: 'black',
    border: 0,
    opacity: '1',
    width: '92.8%',
    fontSize: '14px',
    fontFamily: 'halcom',
    maxWidth: '220px',
    padding: '12px 8px',
    cursor: 'pointer',
  },
});

export default styles;
