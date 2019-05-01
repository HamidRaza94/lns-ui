import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
    fontSize: '15px'
  },
  grow: {
    flexGrow: 1
  },
  button: {
    marginLeft: '25px'
  },
  style: {
    textDecoration: 'none',
    color: 'white'
  }
};

class UpdateNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    localStorage.removeItem('Token');
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Button color="inherit">
              <Link to="/admin/update/news" className={classes.style}>
                NEWS
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/admin/update/links" className={classes.style}>
                LINKS
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/admin/update/URL" className={classes.style}>
                URL
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

UpdateNavBar.propTypes = {
  classes: PropTypes.shape().isRequired
};

export default withStyles(styles)(UpdateNavBar);
