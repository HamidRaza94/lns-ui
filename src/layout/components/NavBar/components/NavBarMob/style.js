const style = theme => ({
  root: {
    flexGrow: 1,
    display: 'none',
    cursor: 'pointer',

    [theme.breakpoints.down(940)]: {
      display: 'block',
    },
  },

  appBar: {
    backgroundColor: '#254260',

    '&:hover': {
      backgroundColor: '#0a1f36',
    },
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },

  menuButton: {
    color: 'white',
  },
});

export default style;
