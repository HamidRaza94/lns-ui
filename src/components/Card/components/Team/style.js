export default {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 350,
    height: 500,
    backgroundColor: '#1e2251',
    borderRadius: 5,
    boxShadow: '0px 0px 10px 5px #111433',
    fontFamily: 'Arial, Helvetica, sans-serif',
    color: 'white',
  },

  team: {
    width: '100%',
    height: 300,
    borderRadius: '5px 5px 0px 0px',
    boxShadow: '0px 0px 1px black',
  },

  name: {
    fontWeight: 'bold',
    left: 20,
    top: 20,
    position: 'absolute',
  },

  description: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    margin: '0px 10px',
  },

  span: {
    width: 35,
    height: 2,
    margin: '20px 0px',
    backgroundColor: '#b247af',
  },

  designation: {
    color: 'white',
  },

  socialDiv: {
    width: '100%',
    margin: '15px 0px',
  },

  social: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  socialTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}