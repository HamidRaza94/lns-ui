const style = theme => ({
  root: {},

  banner: {
    width: '100%',
    height: '10%'
  },

  body: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 10%',
    transition: '0.5s',

    [theme.breakpoints.down(1000)]: {
      flexDirection: 'column-reverse',
      margin: '0 5%'
    }
  },

  chiefDirector: {
    display: 'flex',
    flexDirection: 'row'
  },

  update: {
    minWidth: 300
  },

  updatePanel: {
    [theme.breakpoints.down(1000)]: {
      display: 'flex',
      flexDirection: 'row-reverse'
    }
  },

  sections: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    transition: '0.5s',
  }
});

export default style;
