import React from 'react';
import {Theme} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import EventList from './EventList'
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      maxWidth: '80%',
      textAlign: 'center',
      height: 800,
      fontSize: 20,
      marginLeft: '10%'
    }
  }));

export default function ListComponent() {
    const classes = useStyles();

    return (
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root}
                >
                <EventList/>
            </List>
    )
    
}


