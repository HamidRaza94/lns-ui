import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { path } from './cms/routes';
import { Header, NavBar, Footer } from './layout';
import {
  Home,
  CentralBoard,
  EnrollmentVerification,
  EnrollmentRegistration,
  Grievance,
  Donate,
  Appointment,
  LearnerRegistration,
  LearnerVerification,
  Employees,
  Employment,
  NoMatch,
} from './scenes';

const Routes = () => (
  <Router>
    <Header />
    <NavBar />
    <Switch>
      <Route exact path={path.home} component={Home} />
      <Route exact path={path.centralBoard} component={CentralBoard} />
      <Route exact path={path.enrollment.verification} component={EnrollmentVerification} />
      <Route exact path={path.enrollment.registration} component={EnrollmentRegistration} />
      <Route exact path={path.grievance} component={Grievance} />
      <Route exact path={path.donate} component={Donate} />
      <Route exact path={path.appointment} component={Appointment} />
      <Route exact path={path.academics.learner.registration} component={LearnerRegistration} />
      <Route exact path={path.academics.learner.verification} component={LearnerVerification} />
      <Route exact path={path.employees} component={Employees} />
      <Route exact path={path.employments} component={Employment} />
      <Route exact component={NoMatch} />
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
