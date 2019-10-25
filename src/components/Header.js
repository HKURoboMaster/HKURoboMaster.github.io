import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import theme from '../theme';

import logo from '../img/logo.png';

const useStyles = makeStyles({
  logo: {
    height: 'calc(100px + 2vh)'
  },
  heading: {
    backgroundColor: 'lightblue',
    margin: 'auto 2vw',
    padding: '15px',
    borderRadius: '10px',
    color: theme.textColor
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <img src={logo} className={classes.logo} alt="school logo" />
      <div className={classes.heading}>
        <Typography variant="h4">Herkules, the Robomaster Team</Typography>
        <Typography variant="subtitle1">Fight in the Finals!</Typography>
      </div>
    </div>
  );
};

export default Header;
