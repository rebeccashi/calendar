import React from 'react';
import {connect, ReactReduxContextValue} from 'react-redux';
import {CalendarState, ADD_EVENT, Event, addEventAction} from '../../redux/types';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import { withStyles, createStyles } from '@material-ui/core/styles';
import {Theme} from '@material-ui/core'

import moment from 'moment';
import { EventEmitter } from 'events';

const styles = (theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(3),
        maxWidth: 500
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    button: {
        margin: '0 auto',
        textAlign: 'center'
      },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    time: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    title: {
        margin: '0 auto',
        textAlign: 'center'
    }
  });

interface EventCardProps {
    close: any,
    classes: any,
    onAddEvent: (currentEvent: Event) => void
};

interface EventCardState {
    name: string,
    username: string,
    selectedDate: string,
    startTime: string,
    endTime: string,
    location?: string,
    notes?: string
}

class EventCard extends React.Component<EventCardProps, EventCardState>{
    
    constructor(props : any) {
        super(props);
        this.state = {
            name: '',
            username: '',
            selectedDate: moment().format("YYYY-MM-DD"),
            startTime: moment().format("HH:mm"),
            endTime: moment().add(1, "h").format("HH:mm"),
            location: '',
            notes: '',
            };
        this.addHandler = this.addHandler.bind(this);
        this.dateChangeHandler = this.dateChangeHandler.bind(this);
        this.startTimeChangeHandler = this.startTimeChangeHandler.bind(this);
        this.endTimeChangeHandler = this.endTimeChangeHandler.bind(this);
    };

    addHandler() {
        let currentEvent : Event = {
            name: this.state.name,
            username: this.state.username,
            date: this.state.selectedDate, //needs to be fixed
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            location: this.state.location,
            notes: this.state.notes,
            id: this.state.username + ' ' + this.state.name
        };
        if (!currentEvent.name) {
            alert("Event title is required.")
        } else if (!currentEvent.username) {
            alert('Username is required')
        } else if (!currentEvent.startTime) {
            alert('Event start time is required')
        } else if (!currentEvent.endTime) {
            alert('Event end time is required')
        } else {
            this.props.onAddEvent(currentEvent);
            this.props.close();
        } 
    }

    dateChangeHandler(e : React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) {
        if (e.target)
            this.setState({selectedDate: e.target.value});
    }

    startTimeChangeHandler(e : React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) {
        if (e.target) {
            this.setState({startTime: e.target.value});
        }
    }

    endTimeChangeHandler(e : React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) {
        if (e.target) {
            this.setState({endTime: e.target.value});
        }
    }

    render() {

        console.log(moment().format("MM-DD-YYYY"))

        const { classes } = this.props;

        return (
            <Card className={this.props.classes.root}>
                <CardContent>
                    <div className={this.props.classes.title}>
                    <TextField
                        id="outlined-with-placeholder"
                        label="New Event"
                        placeholder="New Event"
                        className={this.props.classes.textField}
                        onChange={e => this.setState({name: e.target.value})}
                        margin="normal"
                        variant="outlined"
                        required
                    />
                    </div>
                    <TextField
                        id="outlined-textarea"
                        label="Username"
                        placeholder="Username"
                        className={this.props.classes.textField}
                        onChange={e => this.setState({username: e.target.value})}
                        margin="normal"
                        fullWidth
                        required
                    />

                    <TextField
                            id="date"
                            label="Date"
                            type="date"
                            defaultValue={moment().format("YYYY-MM-DD")}
                            className={classes.time}
                            onChange={(e) => this.dateChangeHandler(e)}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    <TextField
                        id="time"
                        label="Start Time"
                        type="time"
                        defaultValue={moment().format("HH:mm")}
                        className={classes.time}
                        onChange={(e) => this.startTimeChangeHandler}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                    />

                    <TextField
                        id="time"
                        label="End Time"
                        type="time"
                        defaultValue={moment().add(1, "h").format("HH:mm")}
                        className={classes.time}
                        onChange={(e) => this.endTimeChangeHandler}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                    />
    
                    <TextField
                        id="outlined-textarea"
                        label="Location"
                        placeholder="Location"
                        className={this.props.classes.textField}
                        onChange={e => this.setState({location: e.target.value})}
                        margin="normal"
                        fullWidth
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Notes"
                        placeholder="Notes"
                        multiline
                        className={this.props.classes.textField}
                        onChange={e => this.setState({notes: e.target.value})}
                        margin="normal"
                        fullWidth
                    />
                </CardContent>
                <CardActions>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        className={this.props.classes.button}
                        onClick={this.addHandler}>
                        Add Event
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

const mapStateToProps = (state : CalendarState) => ({
    e: state.events
});

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddEvent: (currentEvent : Event) => dispatch({type: ADD_EVENT, payload: currentEvent}),
    }
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(EventCard));

/*
<TextField
                        id="datetime-local"
                        label="Start Time"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        className={this.props.classes.time}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />

                    <TextField
                        id="datetime-local"
                        label="End Time"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        className={this.props.classes.time}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    */