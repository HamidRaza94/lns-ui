import React from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import theme from './theme';
import Routes from './Routes';
import { SnackBarProvider } from './contexts';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <SnackBarProvider>
      <Routes />
    </SnackBarProvider>
  </MuiThemeProvider>
);

export default App;
