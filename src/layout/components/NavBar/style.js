export default {
  nav: {
    display: 'flex',
    backgroundColor: '#254260',
  },

  ul: {
    listStyle: 'none',
    margin: 0,
    paddingLeft: 0,
  },

  li: {
    backgroundColor: '#254260',
    display: 'block',
    float: 'left',
    padding: '1rem',
    // padding: '1rem 2rem 1rem 2rem',
    position: 'relative',
    textDecoration: 'none',
    transitionDuration: '0.5s',

    '&:hover': {
      backgroundColor: '#a9502c',
    },
  },

  text: {
    color: '#fff',
  },

  ul_li_ul: {
    listStyle: 'none',
    margin: 0,
    paddingLeft: 0,
    backgroundColor: '#254260',
    visibility: 'hidden',
    opacity: 0,
    minWidth: '5rem',
    position: 'absolute',
    transition: 'all 0.5s ease',
    marginTop: '1rem',
    left: 0,
    display: 'none',
    zIndex: 1,
  },

  ul_li_ul_li: {
    clear: 'both',
    width: 200,
    backgroundColor: '#254260',
    display: 'block',
    float: 'left',
    padding: 10,
    position: 'relative',
    textDecoration: 'none',
    transitionDuration: '0.5s',

    '&:hover': {
      backgroundColor: '#a9502c',
    },
  },

  active: {
    backgroundColor: '#a9502c',
  },

  showList: {
    visibility: 'visible',
    opacity: 1,
    display: 'block',
  },

  hideList: {
    visibility: 'hidden',
    opacity: 0,
    display: '',
  },
};
