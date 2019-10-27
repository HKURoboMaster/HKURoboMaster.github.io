import React from 'react';
import { makeStyles, Typography, Paper } from '@material-ui/core';
import generateLinks from './generateLinks';
import siteConfig from '../siteConfig';

const useStyles = makeStyles({
  container: {
    margin: 'auto 1vw'
  },
  paper: {
    marginBottom: '2vh',
    padding: '5px'
  }
});

const SideTab = () => {
  const classes = useStyles();
  const { eventLinks, accessLinks } = siteConfig;

  return (
    <div className={classes.container}>
      <Paper elevation={5} className={classes.paper}>
        <Typography variant="subtitle1">Recent Events</Typography>
        {generateLinks(eventLinks)}
      </Paper>

      <Paper elevation={5} className={classes.paper}>
        <Typography variant="subtitle1">Quick Access</Typography>
        {generateLinks(accessLinks)}
      </Paper>
    </div>
  );
};

export default SideTab;
