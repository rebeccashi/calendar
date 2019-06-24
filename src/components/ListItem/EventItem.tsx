import React, {useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import {Theme} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider'
import moment from 'moment'

interface EventItemProps {
    name: string,
    date: string,
    startTime: string,
    endTime: string,
    location?: string,
    notes?: string,
    username: string,
    id: string,
    index?: number,
    style?: object
};

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        paddingLeft: '15%',
        backgroundColor: '#e8eff2'
      },
    text: {
        paddingLeft: '15%'
    }
}));

const EventItem = ({
    name, date, startTime, endTime, location, notes, username, id, index, style
} :EventItemProps) => {
    const [checked, setChecked] = React.useState(-1);

    const handleCheck = () => {
        setChecked((checked === -1) ? 0 : -1);
    }

    const classes=useStyles();

    return (
        <React.Fragment>
            <ListItem style={style} key={index} className={classes.root}>
                <ListItemIcon>
                <Checkbox
                    edge="start"
                    onChange={handleCheck}
                    checked={checked !== -1}
                    color="primary"
                    inputProps={{ 'aria-labelledby': id }}
                />
                </ListItemIcon>
                <ListItemText 
                    id={id} 
                    className={classes.text}
                    primary={
                        <React.Fragment>
                            <Typography variant="h6">
                                {name}
                            </Typography>
                        </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                            <Typography variant="subtitle2" gutterBottom>
                                User: {username}
                            </Typography>
                            <Typography
                                variant="body1">
                                Date: {date}
                            </Typography>
                            <Typography
                                variant="body1">
                                Starts at: {startTime} Ends at: {endTime}
                            </Typography>
                            {location ? 
                                <Typography
                                    variant="body1">
                                    Location: {location}
                                </Typography>
                            : null}
                            {notes ? 
                                <Typography
                                    variant="body1">
                                    Notes: {notes}
                                </Typography>
                            : null}
                        </React.Fragment>
                    } />
                
            </ListItem>
            <Divider variant="inset" component="li" />
        </React.Fragment>

    )
};

export default EventItem;