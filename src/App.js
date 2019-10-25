import React from 'react';
import { makeStyles } from '@material-ui/core';
import theme from './theme';
import Header from './components/Header';

const useStyles = makeStyles({
  app: {
    backgroundColor: theme.primaryColor,
    fontFamily: 'Arial, Helvetica, sans-serif',
    textAlign: 'center',
    height: '100vh'
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header />
    </div>
  );
};

export default App;
