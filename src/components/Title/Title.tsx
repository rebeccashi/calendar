import React from 'react';
import Typography from '@material-ui/core/Typography'
import {makeStyles, createStyles} from '@material-ui/core/styles'
import {Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme)=> createStyles({
    title: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
    }
}));

export default function Title () {

    const classes = useStyles();

  return (
        <Typography variant="h5" className={classes.title}>
                        To-Do List
        </Typography>
    )
};