import React from 'react';
import { withStyles, Grid } from '@material-ui/core';

import styles from './style';
import { Content, UpdatePanel } from './components';
import { Slider, Section } from '../../components';
import { home } from '../../cms';
import { TEAM_FOLDER } from '../../config';

const Home = () => {
  const { gallery, banners, sections } = home;

  return (
    <Grid container direction="column">
      <Grid item>
        <Slider banners={banners} width="100%" height="350" random />
      </Grid>

      <Grid item>
        <Grid container justify="center" style={{ backgroundColor: '' }}>
          <Grid item sm={3} style={{ backgroundColor: '' }}>
            <div>
              <img
                src={`${TEAM_FOLDER}/saiyad_shah_alam.jpg`}
                width={120}
                height={130}
                alt="Saiyad Shah Alam"
              />
            </div>
            <UpdatePanel />
          </Grid>

          <Grid item sm={7}>
            <Content />
            <Slider banners={gallery} width="100%" height="300" random />
          </Grid>
        </Grid>
      </Grid>

      <Grid item style={{ margin: 10 }}>
        <Grid container justify="center" alignItems="center">
          <Grid item>
            <Grid container justify="center">
              {sections.map(({ media, mediaText, list }) => (
                <Grid item>
                  <Section media={media} mediaText={mediaText} list={list} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Home);
