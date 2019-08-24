const color = {
  blue: '#254260',
  orange: '#a9502c',
  lightOrange: '#c46741',
}

const { lightOrange, orange } = color;

export default {
  list: {
    width: 250,
  },

  fullList: {
    width: 'auto',
  },

  nav: {
    paddingTop: 8,
    paddingBottom: 8,
  },

  navChildren: {
    marginLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },

  link: {
    textDecoration: 'none',
  },

  active: {
    backgroundColor: orange,
  },

  activeChildren: {
    backgroundColor: lightOrange,
  },
};
