import React, {useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

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

const EventItem = ({
    name, date, startTime, endTime, location, notes, username, id
} :EventItemProps) => {

    const [checked, setChecked] = React.useState(0);
    //const [open, setOpen] = React.useState(false);

    const handleCheck = () => {
        setChecked((checked === -1) ? 0 : -1);
    }

    return (
        <ListItem key={id}>
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
                primary={name} />
        </ListItem>

    )
};

export default EventItem;