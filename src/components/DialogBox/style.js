export default theme => ({
  footerPrimaryButton: {
    color: theme.palette.ternary.dark,

    '&:hover': {
      color: theme.palette.ternary.main,
    },
  },
  circular: {
    color: theme.palette.ternary.main,
  },
});