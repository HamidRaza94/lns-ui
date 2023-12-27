const style = theme => ({
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  root: {
    width: '90%',
    margin: '10px 0',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: '5px',
  },
});

export default style;
