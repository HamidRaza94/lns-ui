import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { routes } from './cms';
// import Test from './Test';
import { Header, NavBar, Footer } from './layout';
import {
  Home,
  CentralBoard,
  CentralProtectorBoard,
  CentralAdvisoryBoard,
  CentralSectionBoard,
  StateAdvisoryBoard,
  StateBoard,
  EnrollmentVerification,
  VolunteerShip,
  Grievance,
  Donate,
  Appointment,
  LearnerRegistration,
  LearnerVerification,
  Employees,
  Employment,
  NoMatch
} from './scenes';

const { path } = routes;

const Routes = () => (
  <Router>
    <Header />
    <NavBar />
    {/* <Test /> */}
    <Switch>
      <Route exact path={path.home} component={Home} />
      <Route exact path={path.board.central.home} component={CentralBoard} />
      <Route exact path={path.board.central.protector} component={CentralProtectorBoard} />
      <Route exact path={path.board.central.advisory} component={CentralAdvisoryBoard} />
      <Route exact path={path.board.central.section} component={CentralSectionBoard} />
      <Route exact path={path.board.state.advisory} component={StateAdvisoryBoard} />
      <Route exact path={path.board.state.home} component={StateBoard} />
      <Route exact path={path.enrollment.verification} component={EnrollmentVerification} />
      <Route exact path={path.enrollment.registration} component={VolunteerShip} />
      <Route exact path={path.grievance.home} component={Grievance} />
      <Route exact path={path.donate} component={Donate} />
      <Route exact path={path.appointment} component={Appointment} />
      <Route exact path={path.academics.learner.registration} component={LearnerRegistration} />
      <Route exact path={path.academics.learner.verification} component={LearnerVerification} />
      <Route exact path={path.employees} component={Employees} />
      <Route exact path={path.employments} component={Employment} />
      <Route exact path={path.placementCell} component={NoMatch} />
      <Route exact component={NoMatch} />
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
