import React from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import theme from './theme';
import Routes from './Routes';
import { SnackBarProvider } from './contexts'
import { SuccessSnackBar } from './components';

const App = () => (
  <SnackBarProvider>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </MuiThemeProvider>
    <SuccessSnackBar />
  </SnackBarProvider>
);

export default App;
