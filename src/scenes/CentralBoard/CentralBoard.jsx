import React, { useEffect, useState } from 'react';
import { withStyles, Typography } from '@material-ui/core';

import styles from './style';
import { Card } from '../../components';
import request, { API_METHOD, ENDPOINTS } from '../../libs/request';

const CentralBoard = props => {
  const { classes } = props;

  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = () => {
      request(API_METHOD.get, ENDPOINTS.allUsers, { params: { type: 'member' }})
        .then((res) => setMembers(res))
        .catch((err) => console.error(err))
    };

    fetchAllUsers();
  }, []);

  const getFacebook = (contacts) => {
    if (!contacts.length) {
      return [];
    }

    return contacts.filter((contact) => contact.type === 'facebook').map(({ value }) => value);
  };

  const getWhatsapp = (contacts) => {
    if (!contacts.length) {
      return [];
    }

    return contacts.filter((contact) => contact.type === 'whatsapp').map(({ value }) => value);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.typo} variant="h2" align="center">Central Governing Board</Typography>
      <div className={classes.team}>      
        {members.map((member) => (
          <Card
            key={member.originalId}
            variant="team"
            data={{
              name: `${member.firstName} ${member.lastName}`,
              image: member.profile,
              rank: member.designation,
              facebook: getFacebook(member.contacts).length ? getFacebook(member.contacts)[0] : null,
              whatsapp: getWhatsapp(member.contacts).length ? getWhatsapp(member.contacts)[0] : null,
              twitter: null,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default withStyles(styles)(CentralBoard);
