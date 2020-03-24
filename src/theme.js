import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f2944d',
    },
    secondary: {
      main: '#254260',
    },
    ternary: {
      main: '#ffffff',
    },
  },
  typography: {
    fontFamily: ['"Trebuchet MS"', 'Helvetica', 'sans-serif'].join(','),
    htmlFontSize: 17,
    useNextVariants: true,
  },
  overrides: {
    MUIDataTableHeadCell: {
      root: {
        '&:nth-child(1)': {
          width: 150,
        },
        '&:nth-child(2)': {
          width: 300,
        },
        '&:nth-child(3)': {
          width: 300,
        },
      },
    },
  },
});

export default theme;
