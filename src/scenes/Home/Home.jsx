import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';

import styles from './style';
import { Content, UpdatePanel } from './components';
import { Card, Carousel } from '../../components';
import { banners } from '../../assets';
import request, { API_METHOD, ENDPOINTS } from '../../libs/request';

const useStyles = makeStyles(styles);

const Home = () => {
  const classes = useStyles();

  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchAllUsers = () => {
      request(API_METHOD.get, ENDPOINTS.fetchImage.replace(':type', 'gallery'))
        .then((res) => setGallery(res))
        .catch((err) => console.error(err))
    };

    fetchAllUsers();
  }, []);

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
            {gallery.map(({ originalId, imageURL, imagePublicId }) => (
              <img key={originalId} src={imageURL} alt={imagePublicId} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Home;
