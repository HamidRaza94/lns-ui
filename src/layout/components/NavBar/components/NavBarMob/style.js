const style = theme => ({
  root: {
    display: 'none',
    backgroundColor: '#254260',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: '#0a1f36',
    },

    [theme.breakpoints.down(940)]: {
      display: 'block',
    },
  },

  menuButton: {
    width: '100%',
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
  },

  list: {
    width: 250,
  },
})

export default style;
