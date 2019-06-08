import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, NavBar, Footer } from '../layout';
import {
  Home,
  CentralBoard,
  StateBoard,
  Volunteers,
  VolunteerShip,
  Complaints,
  Donate,
  Appointment,
  Academics,
  Employees,
  StudyCenter,
  NoMatch
} from '../pages';

const Routes = () => (
  <Router>
    <Header />
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/central_board" component={CentralBoard} />
      <Route exact path="/state_board" component={StateBoard} />
      <Route exact path="/volunteers" component={Volunteers} />
      <Route exact path="/volunteer_ship" component={VolunteerShip} />
      <Route exact path="/complaints" component={Complaints} />
      <Route exact path="/donate" component={Donate} />
      <Route exact path="/appointment" component={Appointment} />
      <Route exact path="/academics" component={Academics} />
      <Route exact path="/employees" component={Employees} />
      <Route exact path="/study_center" component={StudyCenter} />
      <Route exact component={NoMatch} />
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
