import React from 'react';
import { withStyles, Grid } from '@material-ui/core';

import styles from './style';
import { Content, UpdatePanel } from './components';
import { Slider, Card } from '../../components';
import { gallery, banners, sections } from '../../cms/home';
import { TEAM_FOLDER } from '../../cms/constants';

const Home = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.slider}>
        <Slider banners={banners} className={classes.banner} />
      </div>

      <div className={classes.body}>
        <div className={classes.update}>
          <UpdatePanel className={classes.updatePanel} />
        </div>

        <div className={classes.content}>
          <div className={classes.chiefDirector}>
            <div className={classes.chiefDirectorImage}>
              <img
                src={`${TEAM_FOLDER}/saiyad_shah_alam.jpg`}
                width={120}
                height={130}
                alt="Saiyad Shah Alam"
              />
            </div>
            <div className={classes.chiefDirectorMessage} />
          </div>
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
};

export default withStyles(styles)(Home);
