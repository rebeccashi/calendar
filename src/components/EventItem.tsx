import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';

interface EventItemProps {
    name: string,
    date: string,
    startTime: string,
    endTime: string,
    location: string,
    notes: string,
    username: string,
    id: string    
};

const EventItem = ({
    date, startTime, endTime, location, notes, username, id
} :EventItemProps) => {

    const [checked, setChecked] = React.useState(0);

    const handleToggle = () => {
        setChecked((checked === -1) ? 0 : -1);
    }

    return (
        <ListItem key={id}>
            <ListItemText id={id} primary={``} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle}
                checked={checked !== -1}
              />
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default EventItem;