import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Member from './Member';
import Gallery from './Gallery';
import styles from './style';
import { ROLES } from '../../../libs/extra/constants';

const useStyles = makeStyles(styles);

const PANELS = {
  member: 'member',
  gallery: 'gallery',
};

const AdminPanel = (props) => {
  const { user } = props;

  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const [ADMIN_ROLE] = ROLES;

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {user.role === ADMIN_ROLE ? (
        <Accordion expanded={expanded === PANELS.member} onChange={handleChange(PANELS.member)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Members</Typography>
          </AccordionSummary>
          <Member />
        </Accordion>
      ) : null}
      <Accordion expanded={expanded === PANELS.gallery} onChange={handleChange(PANELS.gallery)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Gallery</Typography>
        </AccordionSummary>
        <Gallery user={user} />
      </Accordion>
    </div>
  );
};

export default AdminPanel;
