import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import theme from './theme';
import Header from './components/Header';
import SideTab from './components/SideTab';
import Main from './components/Main';

const useStyles = makeStyles({
  app: {
    backgroundColor: theme.primaryColor,
    fontFamily: 'Arial, Helvetica, sans-serif',
    textAlign: 'center',
    height: '100vh'
  },
  gridContainer: {
    flexGrow: 1,
    margin: '2vh 2vw'
  }
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <Header />

      <div className={classes.gridContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <SideTab />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Main />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default App;
