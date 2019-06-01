import React from 'react';
import { withStyles, Grid } from '@material-ui/core';

import styles from './style';
import { Content, UpdatePanel } from './components';
import { Slider, Section } from '../../components';
import { GALLERY_FOLDER } from '../../config';

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

const media = './images/img-egov-serv.png';
const mediaText = 'Beauty Parlour';
const list = ['list1', 'list2', 'list3'];

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
            <Slider banners={gallery} width="100%" height="300" random />
          </Grid>
        </Grid>
      </Grid>

      <Grid item style={{ margin: 10 }}>
        <Grid container justify="center">
          <Grid item>
            <Section media={media} mediaText={mediaText} list={list} />
          </Grid>
          <Grid item>
            <Section media={media} mediaText={mediaText} list={list} />
          </Grid>
          <Grid item>
            <Section media={media} mediaText={mediaText} list={list} />
          </Grid>
          <Grid item>
            <Section media={media} mediaText={mediaText} list={list} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Home);
