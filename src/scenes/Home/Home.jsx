import React, { useState } from 'react';
import { makeStyles, Button, Card as MCard, CardContent, CardMedia, Typography } from '@material-ui/core';

import styles from './style';
import { Content, UpdatePanel } from './components';
import { Card, DialogBox, SlickSlider, Carousel } from '../../components';
import { TEAM_FOLDER } from '../../libs/extra/constants';
import { messages, home } from '../../cms';
import { gallery, banners, sections } from '../../assets';

const useStyles = makeStyles(styles);

const getFormattedMessage = (message) => message.map((msg, index) => msg ? (
  <Typography key={index} variant="body2" color="textSecondary">
    {msg}
  </Typography>
) : <br key={index} />);

const Home = () => {
  const [isDialogBoxOpen, setIsDialogBoxOpen] = useState(false);
  const classes = useStyles();

  const handleDialogBox = () => {
    setIsDialogBoxOpen(!isDialogBoxOpen);
  }

  return (
    <div className={classes.root}>
      <div className={classes.slider}>
        <Carousel>
          {banners.map(({ id, image, title }) => <img key={id} src={image} alt={title} />)}
        </Carousel>
      </div>

      <div className={classes.body}>
        <div className={classes.update}>
          <MCard className={classes.card}>
            <CardMedia
              className={classes.cover}
              image={`${TEAM_FOLDER}/saiyad_shah_alam.jpg`}
              title="Saiyad Shah Alam"
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                {getFormattedMessage(messages.chiefDirector)}
              </CardContent>
              <div className={classes.controls}>
                <Button className={classes.controlButton} onClick={handleDialogBox}>{home.readMore}</Button>
                <DialogBox
                  open={isDialogBoxOpen}
                  title="SAIYAD SHAH ALAM"
                  agreeButtonLabel="OK"
                  agreeButtonAction={handleDialogBox}
                >
                  {getFormattedMessage(messages.chiefDirector)}
                </DialogBox>
              </div>
            </div>
          </MCard>
          <UpdatePanel className={classes.updatePanel} />
        </div>

        <div className={classes.content2}>
          <Content />
          <Carousel>
            {gallery.map(({ id, image, title }) => <img key={id} src={image} alt={title} />)}
          </Carousel>
        </div>
      </div>

      <SlickSlider>
        {sections.map((section) => <Card key={section.id} variant="section" data={section} />)}
      </SlickSlider>
    </div>
  )
}

export default Home;
