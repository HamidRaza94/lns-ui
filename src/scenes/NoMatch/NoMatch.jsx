import React from 'react';
import { withStyles } from '@material-ui/core';

import styles from './style';

const NoMatch = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
		  <div className={classes.notFound}>
			  <div className={classes.notFound404}>
				  <h3 className={classes.h3}>Oops! Page not found</h3>
				  <h1 className={classes.h1}>
            <span className={classes.span}>4</span>
            <span className={classes.span}>0</span>
            <span className={classes.span}>4</span>
          </h1>
			  </div>
			  <h2 className={classes.h2}>we are sorry, but the page you requested was not found</h2>
		  </div>
	  </div>
  );
};

export default withStyles(styles)(NoMatch);
