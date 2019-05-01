import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import theme from './theme';
import PrivateRoutes from './routes/index';
import NoMatch from './pages/NoMatch';
import SharedSnackbarProvider from './Contexts/SnackBarProvider/SnackBarProvider';
import { Update } from './pages/Update';

const App = () => (
  <SharedSnackbarProvider>
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <Redirect to="/login" /> */}
          </Route>
          {/* <AuthRoutes exact path="/login" component={Login} /> */}
          <PrivateRoutes path="/admin/update" component={Update} />
          <PrivateRoutes path="/admin/update/news" component={Update} />

          <PrivateRoutes path="/admin/update/links" component={Update} />
          <PrivateRoutes path="/admin/update/notice" component={Update} />

          <PrivateRoutes path="/admin" component={NoMatch} />
          <PrivateRoutes component={NoMatch} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </SharedSnackbarProvider>
);

export default App;
