import React from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import theme from './theme';
import Routes from './Routes';
import { SnackBarProvider } from './contexts'
import { SuccessSnackBar } from './components';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <SnackBarProvider>
      <CssBaseline />
      <Routes />
      <SuccessSnackBar />
    </SnackBarProvider>
  </MuiThemeProvider>
);

export default App;
