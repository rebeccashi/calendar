import React, {Component} from 'react';
import {connect} from 'react-redux';
import EventItem from './EventItem'
import {Event, CalendarState} from '../redux/calendar/calendarTypes'
import {addMusicEvents} from '../redux/calendar/calendarActions'
import { getDisplayEvents, getMusicEvents } from '../redux/selector';
import { RootState } from '..';
import axios from 'axios';
import {geolocated, GeolocatedProps} from 'react-geolocated';


interface ListProps {
    events: Event[],
    musicEvents: Event[],
    addMusicEvents: typeof addMusicEvents
};
  
class EventList extends Component<ListProps, GeolocatedProps> {

    constructor(props : ListProps) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.REACT_APP_API_KEY}`, {
            params: {
                postalCode: '10003'
            }
        })
        .then(response => {
            //console.log(response.data._embedded.events)
            this.props.addMusicEvents(response.data._embedded.events)
        })
    }

    render() {
        const musicEvents = this.props.musicEvents.map((e : Event) => (
            <EventItem
                id={e.name}
                name = {e.name}
                date={e.date.format('MM-DD-YYYY')}
                startTime={e.startTime.format('hh:mm A')}
                endTime={e.endTime.format('hh:mm A')}
                location={e.location}
                notes={e.notes}
                username={e.username}
            />
        ));

        const customEvents = this.props.events.map((e : Event) => (
            <EventItem
                id={e.name}
                name = {e.name}
                date={e.date.format('MM-DD-YYYY')}
                startTime={e.startTime.format('hh:mm A')}
                endTime={e.endTime.format('hh:mm A')}
                location={e.location}
                notes={e.notes}
                username={e.username}
            />
        ));

        const allEvents = [...musicEvents, ...customEvents];
        return allEvents;
    }
};

const mapStateToProps = (state : RootState)  => {
    return {
        events: getDisplayEvents(state),
        musicEvents: getMusicEvents(state)
    }
};

export default connect(mapStateToProps, {addMusicEvents})(EventList);