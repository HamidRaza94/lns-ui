import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from '@material-ui/core';

import styles from './style';
import { SVG } from '../SVG';

function Section(props) {
  const { classes, media, mediaText, list, style } = props;

  return (
    <Card className={classes.card} style={{ ...style.card }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          style={style.media}
          image={media}
          title="Contemplative Reptile"
        >
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.mediaText}
          >
            {mediaText}
          </Typography>
        </CardMedia>
        <CardContent className={classes.content}>
          <Grid container direction="column">
            <Grid item>
              <div className={classes.demo}>
                <List dense disablePadding>
                  {list.map(listItem => (
                    <ListItem disableGutters className={classes.listItem}>
                      <SVG variant="bullet" />
                      <ListItemText
                        className={classes.listItemText}
                        primary={listItem}
                      />
                    </ListItem>
                  ))}
                </List>
              </div>
            </Grid>
            <Grid item>
              <Button size="small" color="primary">
                More+
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Section.propTypes = {
  style: PropTypes.object.isRequired
};

Section.defaultProps = {
  style: {}
};

export default withStyles(styles)(Section);
