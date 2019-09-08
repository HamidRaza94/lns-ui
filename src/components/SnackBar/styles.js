import { green, amber } from '@material-ui/core/colors';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },

  success: {
    backgroundColor: green[600],
  },

  error: {
    backgroundColor: theme.palette.error.dark,
  },

  info: {
    backgroundColor: theme.palette.primary.dark,
  },

  warning: {
    backgroundColor: amber[700],
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
    alignItems: 'center',
  },
});

export default styles;
