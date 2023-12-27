import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CircularProgress
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import styles from './style';

function Update(props) {
  const { classes, data } = props;
  const { title, isLoading, value } = data;
  const bull = <span className={classes.bullet}>•</span>;

  const getContent = () => {
    if (isLoading) {
      return <CircularProgress />;
    }

    if (value?.length) {
      return value.map((item, index) => (
        <Typography key={index} gutterBottom>
          {bull}
          {item}
        </Typography>
      ));
    }

    return `No ${title} Here !`;
  };

  return (
    <Card className={classes.card}>
      <Typography
        className={classes.title}
        variant="h5"
      >
        {title}
      </Typography>
      <CardContent className={classes.content}>
        {getContent()}
      </CardContent>
      {value?.length >= 5 && (
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            More
            <SendIcon className={classes.rightIcon} />
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

Update.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Update);
