import React, { useState, Fragment, useEffect } from 'react';
import { makeStyles, Card, CardContent, CardMedia } from '@material-ui/core';

import styles from './style';
import { DialogBox } from '../../../../components';
import request, { API_METHOD, ENDPOINTS } from '../../../../libs/request';
import config from '../../../../config';

const useStyles = makeStyles(styles);

const Message = () => {
  const classes = useStyles();
  const [isDialogBoxOpen, setIsDialogBoxOpen] = useState(false);
  const [user, setUser] = useState({ profile: '', message: '' });

  useEffect(() => {
    const fetchUser = async () => {
      const { REACT_APP_CEO_USERNAME } = config;

      request(API_METHOD.get, ENDPOINTS.user.replace(':username', REACT_APP_CEO_USERNAME))
        .then((res) => setUser(res))
        .catch((err) => console.error(err))
    }

    fetchUser();
  }, []);

  const handleDialogBox = () => {
    setIsDialogBoxOpen(!isDialogBoxOpen);
  }

  return (
    <Fragment>
      <Card className={classes.card} onClick={handleDialogBox}>
        <CardMedia
          image={user.profile}
          className={classes.cardMedia}
          title="Saiyad Shah Alam"
        />
        <CardContent className={classes.cardContent}>
          {user.message}
        </CardContent>
      </Card>
      <DialogBox
        open={isDialogBoxOpen}
        title="SAIYAD SHAH ALAM"
        agreeButtonLabel="OK"
        agreeButtonAction={handleDialogBox}
      >
        {user.message}
      </DialogBox>
    </Fragment>
  )
};

export default Message;
