import React from 'react';
import {
  makeStyles,
  Typography,
  Paper,
  Link,
  Grid,
  Tabs,
  Tab,
  Box
} from '@material-ui/core';
import PropTypes from 'prop-types';
import generateLinks from './generateLinks';

import infantry from '../img/AI_infantry.png';
import siteConfig from '../siteConfig';

const useStyles = makeStyles({
  container: {
    margin: 'auto 1vw',
    padding: '2vh 4vw'
  },
  heading: {
    padding: '10px'
  },
  gridContainer: {
    flexGrow: '1'
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    margin: '10px'
  },
  introduction: {
    textAlign: 'left'
  },
  textBlock: {
    margin: '1vh auto'
  },
  resourceContainer: {
    margin: '1vh auto'
  },
  tabContainer: {
    flexGrow: '1'
  }
});

const Main = () => {
  const classes = useStyles();
  const { trainingLinks, rAndDLinks, managementLinks } = siteConfig;

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = props => {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  };

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
  };

  const a11yProps = index => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
    };
  };

  return (
    <Paper elevation={5} className={classes.container}>
      <div className={classes.heading}>
        <Typography variant="h5">
          <Link
            href="http://innowing.hk/robomaster"
            target="_blank"
            rel="noreferrer"
            color="inherit"
          >
            The Project
          </Link>
        </Typography>
        <Typography variant="caption">
          click to view our innowing website
        </Typography>
      </div>

      <div className={classes.gridContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <img
              src={infantry}
              alt="infantry robot"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <div className={classes.introduction}>
              <div className={classes.textBlock}>
                <Typography variant="h6">
                  Robomaster Robotics Competition
                </Typography>
                <Typography variant="body1">
                  Robomater Robotics Competition focuses on the comprehensive
                  application and engineering practice ability of the
                  participating members in science and engineering disciplines,
                  fully integrating many robot related technical areas such as
                  "machine vision", "embedded system design", "mechanical
                  control", "inertial navigation", "human-computer interaction",
                  etc.
                </Typography>
              </div>
              <div className={classes.textBlock}>
                <Typography variant="h6">Rules Overview</Typography>
                <Typography variant="body1">
                  The participating teams independently develop different types
                  of robots, and launch projectiles in the complex battlefield.{' '}
                  <br />
                  The robots need to cooperate with each other and work
                  together. Matches last up to 7 minutes, the team with the
                  highest remaining Base HP wins the match.
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className={classes.resourceContainer}>
        <Typography variant="h6">What does this page do?</Typography>
        <Typography variant="body1">
          The page serves as a collection of our resources.
        </Typography>

        <div className={classes.tabContainer}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="inherit"
            centered
          >
            <Tab label="Training" {...a11yProps(0)} />
            <Tab label="R & D" {...a11yProps(1)} />
            <Tab label="Management" {...a11yProps(2)} />
          </Tabs>
          <TabPanel value={value} index={0}>
            {generateLinks(trainingLinks)}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {generateLinks(rAndDLinks)}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {generateLinks(managementLinks)}
          </TabPanel>
        </div>
      </div>
    </Paper>
  );
};

export default Main;
