const style = theme => ({
  root: {
    position: 'relative',
    height: '100vh',
  },

  notFound: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',

    maxWidth: '520px',
    width: '100%',
    lineHeight: '1.4',
    textAlign: 'center',
  },

  notFound404: {
    position: 'relative',
    height: '240px',

    [theme.breakpoints.down(767)]: {
      height: '200px',
    },

    [theme.breakpoints.down(480)]: {
      height: '162px',
    },
  },

  h1: {
    fontFamily: '"Montserrat", sans-serif',
    position: 'absolute',
    left: '50%',
    top: '50%',
    // -webkit-transform: translate(-50%, -50%),
    // -ms-transform: translate(-50%, -50%),
    transform: 'translate(-50%, -50%)',
    fontSize: '252px',
    fontWeight: 900,
    margin: '0px',
    color: '#262626',
    textTransform: 'uppercase',
    letterSpacing: '-40px',
    marginLeft: '-20px',

    [theme.breakpoints.down(767)]: {
      fontSize: '200px',
    },

    [theme.breakpoints.down(480)]: {
      fontSize: '162px',
      height: '150px',
      lineHeight: '162px',
    },
  },

  span: {
    textShadow: '-8px 0px 0px #fff',
  },

  h3: {
    fontFamily: '"Cabin", sans-serif',
    position: 'relative',
    fontSize: '16px',
    fontWeight: 700,
    textTransform: 'uppercase',
    color: '#262626',
    margin: '0px',
    letterSpacing: '3px',
    paddingLeft: '6px',
  },

  h2: {
    fontFamily: '"Cabin", sans-serif',
    fontSize: '20px',
    fontWeight: 400,
    textTransform: 'uppercase',
    color: '#000',
    marginTop: '0px',
    marginBottom: '25px',

    [theme.breakpoints.down(480)]: {
      fontSize: '16px',
    },
  },
});

export default style;
