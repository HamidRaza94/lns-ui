const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },

  heading: {
    display: 'flex',
    flexDirection: 'row',
  },
})

export default styles;
