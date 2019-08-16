import React from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import { SnackBarProvider } from './contexts';
import theme from './theme';
import Routes from './Routes';
// import Test from './Test';

const App = () => (
  <SnackBarProvider>
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
      {/* <Test /> */}
  </MuiThemeProvider>
  </SnackBarProvider>
);

export default App;
