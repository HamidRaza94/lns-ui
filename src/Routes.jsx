import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { path } from './cms/routes';
import { Header, NavBar, Footer } from './layout';
import {
  Admin,
  Home,
  CentralBoard,
  EnrollmentVerification,
  EnrollmentRegistration,
  Grievance,
  Donate,
  Appointment,
  NoMatch,
} from './scenes';

const Routes = () => (
  <Router>
    <Header />
    <NavBar />
    <Switch>
      <Route exact path={path.admin} component={Admin} />
      <Route exact path={path.home} component={Home} />
      <Route exact path={path.centralBoard} component={CentralBoard} />
      <Route exact path={path.enrollment.verification} component={EnrollmentVerification} />
      <Route exact path={path.enrollment.registration} component={EnrollmentRegistration} />
      <Route exact path={path.grievance} component={Grievance} />
      <Route exact path={path.donate} component={Donate} />
      <Route exact path={path.appointment} component={Appointment} />
      <Route exact component={NoMatch} />
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
