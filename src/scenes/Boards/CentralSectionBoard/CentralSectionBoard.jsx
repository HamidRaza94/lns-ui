import React from 'react';
import { withStyles } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import styles from './style';
import { centralSectionBoardData } from '../../../cms/board';
import { Card } from '../../../components';
import { capitalizeAll } from '../../../libs/utils/helpers';

const CentralSectionBoard = props => {
  const { classes } = props;

  console.log('hamid>>>', centralSectionBoardData)

  return (
    <div className={classes.root}>
      {centralSectionBoardData.map(({ courseName, facultyNames }, index) => (
        <ExpansionPanel key={index}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{capitalizeAll(courseName)}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className={classes.team}>      
              {facultyNames.map((facultyName, subIndex) => (
                <Card key={subIndex} variant="team" data={facultyName} />
              ))}
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
}

export default withStyles(styles)(CentralSectionBoard);
