import React from 'react';
import { makeStyles, Typography, Paper, Link } from '@material-ui/core';
import theme from '../theme';
import siteConfig from '../siteConfig';

const useStyles = makeStyles({
  container: {
    margin: 'auto 1vw'
  },
  paper: {
    margin: '2vh auto',
    padding: '5px'
  }
});

const SideTab = () => {
  const classes = useStyles();
  const { eventLinks, accessLinks } = siteConfig;

  const generateLinks = links =>
    links.map(link => (
      <div key={link.name}>
        <Link
          href={link.url}
          rel="noreferrer"
          target="_blank"
          color="inherit"
          variant="body2"
        >
          {link.name}
        </Link>
      </div>
    ));

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
