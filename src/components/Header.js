import React from 'react';
import { makeStyles, Typography, Paper } from '@material-ui/core';
import theme from '../theme';

import logo from '../img/logo.png';

const useStyles = makeStyles({
  logo: {
    height: 'calc(100px + 2vh)'
  },
  heading: {
    backgroundColor: theme.secondaryColor,
    margin: 'auto 2vw',
    padding: '15px',
    borderRadius: '10px',
    color: theme.fontColor
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <img src={logo} className={classes.logo} alt="school logo" />
      <Paper className={classes.heading}>
        <Typography variant="h4">Herkules, the Robomaster Team</Typography>
        <Typography variant="subtitle1">Fight in the Finals!</Typography>
      </Paper>
    </div>
  );
};

export default Header;
