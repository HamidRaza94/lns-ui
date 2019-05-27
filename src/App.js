import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';
// import { UpperPanel, Home, Footer } from './pages';
import { Crd } from './components';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Crd />
    {/* <UpperPanel />
    <Home />
    <Footer /> */}
  </MuiThemeProvider>
);

export default App;
