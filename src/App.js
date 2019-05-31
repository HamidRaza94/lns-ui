import React from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';

import theme from './theme';
import { Routes } from './routes';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Routes />
  </MuiThemeProvider>
);

export default App;
