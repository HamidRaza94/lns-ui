const style = theme => ({
  root: {},

  banner: {
    width: '100%',
    height: '10%'
  },

  body: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0px 100px',
    transition: '0.5s',

    [theme.breakpoints.down(1000)]: {
      flexDirection: 'column-reverse'
    }
  },

  chiefDirector: {
    display: 'flex',
    flexDirection: 'row'
  },

  update: {
    minWidth: 300
  },

  // updatePanel: {
  //   [theme.breakpoints.down(1000)]: {
  //     display: 'flex',
  //     flexDirection: 'row'
  //   }
  // },

  sections: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default style;
