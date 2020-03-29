const style = theme => ({
  root: {},

  banner: {
    width: '100%',
    height: '10%',
    display: 'flex',
    flexDirection: 'column',
  },

  body: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 10%',
    transition: '0.5s',

    [theme.breakpoints.down(1000)]: {
      flexDirection: 'column-reverse',
      margin: '0 5%',
    },

    [theme.breakpoints.down(500)]: {
      flexDirection: 'column-reverse',
      margin: 0,
    },
  },

  chiefDirector: {
    display: 'flex',
    flexDirection: 'row',
    width: 300,
    height: 130,
    margin: 5,
  },

  chiefDirectorMessage: {
    width: 180,
    height: 130,
    padding: 10,
    overflow: 'hidden',
  },

  readMoreButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: 10,
    paddingBottom: 10,
  },

  update: {
    minWidth: 300,
    height: 'auto',
    marginRight: 5,

    [theme.breakpoints.down(1000)]: {
      marginRight: 0,
    },
  },

  updatePanel: {
    [theme.breakpoints.down(1000)]: {
      display: 'flex',
      flexDirection: 'row-reverse',
    },
  },

  sections: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    transition: '0.5s',
  },
});

export default style;
