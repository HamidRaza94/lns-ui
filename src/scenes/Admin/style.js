const style = theme => ({
  root: {
    margin: '20px 200px',
    padding: 15,
    borderRadius: 10,
    boxShadow: '0px 0px 5px #565656',
    backgroundColor: 'white',
    transition: '0.2s',
    width: '700px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    width: '300px',
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '5px',
  },
});

export default style;
