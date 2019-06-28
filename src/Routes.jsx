import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { routes } from './cms';
import { Header, NavBar, Footer } from './layout';
import {
  Home,
  CentralBoard,
  CentralProtectorBoard,
  CentralAdvisoryBoard,
  StateAdvisoryBoard,
  StateBoard,
  Volunteers,
  VolunteerShip,
  Complaints,
  Donate,
  Appointment,
  Academics,
  Employees,
  NoMatch
} from './scenes';

// import NavBar2 from './test/NavBar/NavBar';

const { path } = routes;

const Routes = () => (
  <Router>
    <Header />
    <NavBar />
    <Switch>
      {/* <Route exact path='/test' component={NavBar2} /> */}
      <Route exact path={path.home} component={Home} />
      <Route exact path={path.board.central.home} component={CentralBoard} />
      <Route exact path={path.board.central.protector} component={CentralProtectorBoard} />
      <Route exact path={path.board.central.advisory} component={CentralAdvisoryBoard} />
      <Route exact path={path.board.state.advisory} component={StateAdvisoryBoard} />
      <Route exact path={path.board.state.home} component={StateBoard} />
      <Route exact path={path.volunteers} component={Volunteers} />
      <Route exact path={path.volunteerShip} component={VolunteerShip} />
      <Route exact path={path.complaints} component={Complaints} />
      <Route exact path={path.donate} component={Donate} />
      <Route exact path={path.appointment} component={Appointment} />
      <Route exact path={path.academics.home} component={Academics} />
      <Route exact path={path.employees} component={Employees} />
      <Route exact component={NoMatch} />
    </Switch>
    <Footer />
  </Router>
);

export default Routes;
