import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Grid,
  Button,
  Card as C,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import styles from './style';
import { Content, UpdatePanel } from './components';
import { Slider, Card, DialogBox } from '../../components';
import { gallery, banners, sections } from '../../cms/home';
import { TEAM_FOLDER } from '../../lib/extra/constants';
import { messages } from '../../cms';

const getFormatedMessage = (message) => (
  message.map(msg => {
    if (msg) {
      return (
        <Typography variant="body2" color="textSecondary">
          {msg}
        </Typography>
      )
    }

    return <br/>
  })
)

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDialogBoxOpen: false,
    }
  }

  handleDialogBox = () => {
    this.setState(prevState => ({
      isDialogBoxOpen: !prevState.isDialogBoxOpen
    }));
  }

  render() {
    const { classes } = this.props;
    const { isDialogBoxOpen } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.slider}>
          <Slider banners={banners} className={classes.banner} />
        </div>

        <div className={classes.body}>
          <div className={classes.update}>
            <C className={classes.card}>
              <CardMedia
                className={classes.cover}
                image={`${TEAM_FOLDER}/saiyad_shah_alam.jpg`}
                title="Saiyad Shah Alam"
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  {getFormatedMessage(messages.chiefDirector)}
                </CardContent>
                <div className={classes.controls}>
                  <Button onClick={this.handleDialogBox}>Read More!</Button>
                  {
                    <DialogBox
                      open={isDialogBoxOpen}
                      title="SAIYAD SHAH ALAM"
                      agreeButtonLabel="OK"
                      agreeButtonAction={this.handleDialogBox}
                    >
                      {getFormatedMessage(messages.chiefDirector)}
                    </DialogBox>
                  }
                </div>
              </div>
            </C>
            <UpdatePanel className={classes.updatePanel} />
          </div>

          <div className={classes.content2}>
            <Content />
            <Slider banners={gallery} className={classes.banner} random />
          </div>
        </div>

        <div className={classes.sections}>
          {sections.map((section) => (
            <Grid item>
              <Card variant="section" data={section} />
            </Grid>
          ))}
        </div>
      </div>
    );
  }
};

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

Home.defaultProps = {
  classes: {},
}

export default withStyles(styles)(Home);
