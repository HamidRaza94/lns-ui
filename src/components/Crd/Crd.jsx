import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const Crd = props => {
  const { classes } = props;

  return (
    <Grid
      container
      direction="column"
      style={{
        width: 250,
        height: 300
      }}
    >
      <Grid
        item
        style={{ backgroundColor: '#074394', width: 250, height: 200 }}
      >
        <Grid container direction="column">
          <Grid item>
            <Typography
              variant="h5"
              align="center"
              display="inline"
              style={{
                // display: 'flex',
                color: 'white'
                // margin: '0 auto',
                // backgroundColor: 'green',
                // position: 'absolute',
                // left: 0,
                // top: 0,
                // right: 0,
                // bottom: 0,
                // justifyContent: 'center',
                // alignItems: 'center'
              }}
            >
              Hamid
            </Typography>
          </Grid>
          <Grid item>
            <img
              width={250}
              // height={100}
              src="./images/img-egov-serv.png"
              alt="hii"
              style={{ backgroundColor: 'red' }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item style={{ backgroundColor: '#d9d9d9' }}>
        more
      </Grid>
    </Grid>
  );
};

export default Crd;
