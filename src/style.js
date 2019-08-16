export default {
  nav: {
    display: 'flex',
    backgroundColor: '#254260'
  },

  ul: {
    listStyle: 'none',
    margin: 0,
    paddingLeft: 0
  },

  li: {
    background: '#254260',
    display: 'block',
    float: 'left',
    padding: '1rem',
    position: 'relative',
    textDecoration: 'none',
    transitionDuration: '0.5s',
    cursor: 'pointer',

    '&:hover': {
      background: '#a9502c'
    }
  },

  text: {
    color: '#fff'
  },

  ul_li_ul: {
    listStyle: 'none',
    margin: 0,
    paddingLeft: 0,
    background: '#254260',
    visibility: 'hidden',
    opacity: 0,
    minWidth: '5rem',
    position: 'absolute',
    transition: 'all 0.5s ease',
    marginTop: '1rem',
    left: 0,
    display: 'none'
  },

  ul_li_ul_li: {
    clear: 'both',
    width: 200,
    background: '#254260',
    display: 'block',
    float: 'left',
    padding: 10,
    position: 'relative',
    textDecoration: 'none',
    transitionDuration: '0.5s'
  }
};
