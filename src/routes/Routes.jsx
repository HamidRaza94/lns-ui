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
  Admission,
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
      <Route path="/central_board" component={CentralBoard} />
      <Route path="/state_board" component={StateBoard} />
      <Route path="/volunteers" component={Volunteers} />
      <Route path="/volunteer_ship" component={VolunteerShip} />
      <Route path="/complaints" component={Complaints} />
      <Route path="/donate" component={Donate} />
      <Route path="/appointment" component={Appointment} />
      <Route path="/admission" component={Admission} />
      <Route path="/employees" component={Employees} />
      <Route path="/study_center" component={StudyCenter} />
      <Route component={NoMatch} />
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
