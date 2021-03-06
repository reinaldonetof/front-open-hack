import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  PersonalRank,
  NextRank,
  NextHacks,
  Rank,
  Participated
} from './components'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          lg={3}
          sm={2}
          xl={3}
          xs={12}
        >
          <PersonalRank valuerank={'newbie'} />
        </Grid>
        <Grid
          item
          lg={3}
          sm={2}
          xl={3}
          xs={12}
        >
          <NextRank valuerank={'newbie'} />
        </Grid>
        <Grid
          item
          lg={3}
          sm={2}
          xl={3}
          xs={12}
        >
          <Participated valuerank={'embassador'} />
        </Grid>
        <Grid
          item
          lg={8}
          md={12}
          xl={9}
          xs={8}
        >
          <NextHacks />
        </Grid>
        <Grid
          item
          lg={4}
          md={8}
          xl={9}
          xs={8}
        >
          <Rank />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
