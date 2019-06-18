export const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#131214',
    color: 'white',
    fontSize: 25
  },
  rootBackground: {
    padding: '20px 0px',
    backgroundColor: '#1F2022',
  },

  warning: {
    color: '#FFFFFF',
    padding: 5,
    fontSize: 18,
    textAlign: 'center',
  },
footer: {
  display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', padding: '10px 0px', 
  [theme.breakpoints.down(600)]: {
    flexDirection: 'column'
  }
},
  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down(600)]: {
      order: 1
    }
  },

  designer: {
    color: '#cccdce',
    padding: 2,
    textAlign: 'center',
    fontSize: 16,
    [theme.breakpoints.down(600)]: {
      order: 2
    }
  }
});
