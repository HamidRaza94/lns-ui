import React, { useState, Fragment } from 'react';
import { makeStyles, Card, CardContent, CardMedia, Typography } from '@material-ui/core';

import styles from './style';
import { DialogBox } from '../../../../components';
import { TEAM_FOLDER } from '../../../../libs/extra/constants';
import { messages } from '../../../../cms';

const useStyles = makeStyles(styles);

const Message = () => {
  const classes = useStyles();
  const [isDialogBoxOpen, setIsDialogBoxOpen] = useState(false);

  const cardMessage = messages.chiefDirector.map((msg, index) => msg ? (
    <Typography key={index} variant="body2" color="textSecondary">
      {msg}
    </Typography>
  ) : <br key={index} />);

  const handleDialogBox = () => {
    setIsDialogBoxOpen(!isDialogBoxOpen);
  }

  return (
    <Fragment>
      <Card className={classes.card} onClick={handleDialogBox}>
        <CardMedia
          className={classes.cardMedia}
          image={`${TEAM_FOLDER}/saiyad_shah_alam.jpg`}
          title="Saiyad Shah Alam"
        />
        <CardContent className={classes.cardContent}>
          {cardMessage}
        </CardContent>
      </Card>
      <DialogBox
        open={isDialogBoxOpen}
        title="SAIYAD SHAH ALAM"
        agreeButtonLabel="OK"
        agreeButtonAction={handleDialogBox}
      >
        {cardMessage}
      </DialogBox>
    </Fragment>
  )
};

export default Message;
