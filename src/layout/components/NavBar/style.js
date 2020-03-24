export default ({ palette: { primary, secondary, ternary } }) => ({
  menu: {
    backgroundColor: `${secondary.main} !important`,
    borderRadius: 0,
    margin: 0,
    border: 'none !important',
  },
  subMenu: {
    border: 'none !important',
    boxShadow: 'none',
  },
  menuItem: {
    cursor: 'pointer',
    backgroundColor: `${secondary.main} !important`,
    color: ternary.main,
    border: 'none !important',

    '&:hover': {
      backgroundColor: `${primary.dark} !important`,
      border: 'none',
      color: ternary.main,
    },
  },
  subMenuItem: {
    padding: '13px 18px !important',
  },
  active: {
    backgroundColor: `${primary.dark} !important`,
  },
});
