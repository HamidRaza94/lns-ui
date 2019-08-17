import React from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import { SnackBarProvider } from './contexts';
import theme from './theme';
import Routes from './Routes';

const App = () => (
  <SnackBarProvider>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
  </MuiThemeProvider>
  </SnackBarProvider>
);

export default App;
