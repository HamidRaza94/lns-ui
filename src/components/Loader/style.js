const style = (theme) => ({
  root: {
    position: 'relative',
    top: 5,
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    top: 5,
  },
  top: {
    color: 'primary',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
  },
  circle: {
    strokeLinecap: 'round',
  },
});

export default style;
