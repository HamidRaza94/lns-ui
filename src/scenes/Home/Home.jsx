import React from 'react';
import { makeStyles } from '@material-ui/core';

import styles from './style';
import { Content, UpdatePanel } from './components';
import { Card, Carousel } from '../../components';
import { gallery, banners } from '../../assets';

const useStyles = makeStyles(styles);

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.slider}>
        <Carousel>
          {banners.map(({ id, image, title }) => <img key={id} src={image} alt={title} />)}
        </Carousel>
      </div>

      <div className={classes.body}>
        <div className={classes.update}>
          <Card variant="message" data={{}} />
          <UpdatePanel className={classes.updatePanel} />
        </div>

        <div className={classes.content2}>
          <Content />
          <Carousel>
            {gallery.map(({ id, image, title }) => <img key={id} src={image} alt={title} />)}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Home;
