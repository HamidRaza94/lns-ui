const style = theme => ({
  card: {
    display: 'flex',
    height: 150,
    margin: '5px 0px',
    cursor: 'pointer',
    padding: 5,
    width: '100%',
  },

  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    overflowY: 'scroll',
  },

  cardMedia: {
    width: 180,
  },
});

export default style;
