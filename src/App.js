import React from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import theme from './theme';
import { Routes } from './routes';
// import Test from './Test';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Routes />
    {/* <Test /> */}
  </MuiThemeProvider>
);

export default App;
