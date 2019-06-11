import React from 'react';
import {Theme} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import EventList from './EventList'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';

// const useStyles = makeStyles((theme) => ({
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      textAlign: 'center',
    },
  }));

export default function ListComponent() {
    const classes = useStyles();

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                To-Do List
                </ListSubheader>
            }
            className={classes.root}
            >
            <EventList/>
        </List>
    )

    
}


