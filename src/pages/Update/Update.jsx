import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import UpdateNavBar from './Components/NavBar/UpdateNavBar';

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { match } = this.props;
    return (
      <>
        <Switch>
          <Route exact path={`${match.path}`} component={UpdateNavBar} />
        </Switch>
      </>
    );
  }
}
Update.propTypes = {
  match: PropTypes.shape().isRequired
};
export default Update;
