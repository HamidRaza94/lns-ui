const styles = theme => ({
  success: {
    backgroundColor: '#43A047',
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: '#FFA000',
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItem: 'center',
  },
  margin: {
    margin: "15%",
  },
});

export default styles;
