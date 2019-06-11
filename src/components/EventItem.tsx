import React, {useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import {Theme} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles';

interface EventItemProps {
    name: string,
    date: string,
    startTime: string,
    endTime: string,
    location?: string,
    notes?: string,
    username: string,
    id: string    
};

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: '100%',
        maxWidth: 500,
      },
}));

const EventItem = ({
    name, date, startTime, endTime, location, notes, username, id
} :EventItemProps) => {

    const [checked, setChecked] = React.useState(0);
    //const [open, setOpen] = React.useState(false);

    const handleCheck = () => {
        setChecked((checked === -1) ? 0 : -1);
    }

    const classes=useStyles();

    return (
        <ListItem key={id} className={classes.root}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                onChange={handleCheck}
                checked={checked !== -1}
                inputProps={{ 'aria-labelledby': id }}
              />
            </ListItemIcon>
            <ListItemText 
                id={id} 
                primary={
                    <React.Fragment>
                        <Typography variant="h5">
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
                        {{location} ? 
                            <Typography
                                variant="body1">
                                Location: {location}
                            </Typography>
                        : null}
                        {{location} ? 
                            <Typography
                                variant="body1">
                                Notes: {notes}
                            </Typography>
                        : null}
                    </React.Fragment>
                } />
            
        </ListItem>

    )
};

export default EventItem;