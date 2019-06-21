import React from 'react';
import EventList from './components/EventList';
import ListComponent from './components/ListComponent';
import * as styles from './App.css';
import CreateEvent from './components/CreateEvent/CreateEvent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {Theme} from '@material-ui/core';
import {MuiPickersUtilsProvider,} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import Filter from './components/Filter/Filter'
import Title from './components/Title/Title'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1
  },
  list: {
    width: '90%'
  }
}));


const App: React.FC = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing = {3}>
        <Grid item xs={9}>
            <Title/>
            <Filter/>
            <ListComponent/>
        </Grid>
        <Grid item xs={3}>
          <CreateEvent/>
        </Grid>
      </Grid>
    </div>
    
  );
}

export default App;