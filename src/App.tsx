import React from 'react';
import ListComponent from './components/List/ListComponent';
import * as styles from './App.css';
import CreateEvent from './components/CreateEvent/CreateEvent';
import Grid from '@material-ui/core/Grid';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {Theme} from '@material-ui/core';
import Filter from './components/Filter/Filter'
import Title from './components/Title/Title'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    marginTop: 20
  },
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