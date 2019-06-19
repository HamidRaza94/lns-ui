const style = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.down(1000)]: {
      display: 'flex',
      flexDirection: 'row'
    }
  },

  news: {
    card: {
      margin: '0px 5px 5px 0px'
    },

    title: {
      color: 'white',
      backgroundColor: '#4286f4'
    },

    button: {
      backgroundColor: '#4286f4'
    }
  },

  link: {
    card: {
      margin: '0px 5px 5px 0px'
    },

    title: {
      color: 'white',
      backgroundColor: '#4286f4'
    },

    button: {
      backgroundColor: '#4286f4'
    }
  },

  notice: {
    card: {
      margin: '0px 5px 5px 0px'
    },

    title: {
      color: 'white',
      backgroundColor: '#4286f4'
    },

    button: {
      backgroundColor: '#4286f4'
    }
  }
});

export default style;
