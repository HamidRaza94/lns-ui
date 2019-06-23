export default {
  card: {
    position: 'relative',
    width: 300,
    height: 350,
    overflow: 'hidden',
    borderRadius: 5,
    boxShadow: '0px 0px 2px 2px #cccccc',
    color: '#0b1e0b',
    margin: 5,
    fontFamily: 'sans-serif',

    '&:hover': {
      color: '#43ad43',
    },
  },
  
  image: {
    opacity: 0.8,
    width: 300,
    height: 350,
    transition: '0.4s ease',

    '&:hover': {
      transform: 'scale(1.08)',
      opacity: 1,
    },
  },
  
  text: {
    fontSize: 25,
    position: 'absolute',
    bottom: 8,
    left: 16,
    transition: '0.2s ease',
  },
}
