import React, { Fragment } from 'react';

import { NavBarDesktop, NavBarMob } from './components';

const NavBar = () => (
  <Fragment>
    <NavBarDesktop />
    <NavBarMob />
  </Fragment>
)

export default NavBar;
