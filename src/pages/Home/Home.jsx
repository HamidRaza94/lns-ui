import React from 'react';

import styles from './style';
import { Content, UpdatePanel } from './components';
import { Slider } from '../../components';
import { GALLERY_FOLDER } from '../../config';
import { withStyles, Paper, Grid } from '@material-ui/core';

const gallery = [
  `${GALLERY_FOLDER}/1.jpg`,
  `${GALLERY_FOLDER}/2.jpg`,
  `${GALLERY_FOLDER}/3.jpg`,
  `${GALLERY_FOLDER}/4.jpg`,
  `${GALLERY_FOLDER}/5.jpg`,
  `${GALLERY_FOLDER}/6.jpg`,
  `${GALLERY_FOLDER}/7.jpg`,
  `${GALLERY_FOLDER}/8.jpg`,
  `${GALLERY_FOLDER}/9.jpg`,
  `${GALLERY_FOLDER}/10.jpg`
];

const banners = [`./images/banners/1.jpg`];

const Home = props => {
  const { classes } = props;

  return (
    <Grid container direction="column">
      <Grid item>
        <Slider banners={banners} width="100%" height="350" random />
      </Grid>
      <Grid item>
        <Grid container justify="center" style={{ backgroundColor: '' }}>
          <Grid item sm={3} style={{ backgroundColor: '' }}>
            <UpdatePanel />
          </Grid>
          <Grid item sm={7}>
            <Content />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Home);
