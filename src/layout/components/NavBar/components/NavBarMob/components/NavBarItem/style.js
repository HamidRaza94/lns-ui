const color = {
  blue: '#254260',
  orange: '#a9502c',
  lightOrange: '#c46741',
}

const { orange } = color;

export default {
  list: {
    width: 250,
  },

  nav: {
    paddingTop: 8,
    paddingBottom: 8,
  },

  hover: {
    '&:hover': {
      backgroundColor: orange,
      color: 'white',
    }
  },

  navItem: {
    paddingLeft: 0,
  },

  navChildren: {
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    display: 'none',
  },

  link: {
    textDecoration: 'none',
  },

  showList: {
    display: 'block',
  },

  active: {
    backgroundColor: orange,
  },

  activeText: {
    color: 'white',
  },

  notActiveText: {
    color: 'black',
  },

  activeChildren: {
    // backgroundColor: lightOrange,
    color: orange,
  },

  expand: {
    color: 'white',
  },
};
