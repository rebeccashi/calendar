import React, {Component} from 'react';
import {connect} from 'react-redux';
import EventItem from './EventItem'
import {Event, CalendarState} from '../redux/calendar/calendarTypes'
import { getDisplayEvents } from '../redux/selector';
import { RootState } from '..';
import axios from 'axios';
import {geolocated, GeolocatedProps} from 'react-geolocated';


interface ListProps {
    events: Event[]
};
  
class EventList extends Component<ListProps, GeolocatedProps> {

    constructor(props : ListProps) {
        super(props);
        //this.success = this.success.bind(this);
        //this.failure = this.failure.bind(this);
    }

    componentDidMount() {
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.REACT_APP_API_KEY}`, {
            params: {
                postalCode: '10003'
            }
        })
        .then(response => {
            console.log(response.data._embedded.events)
        })
    }
        /*
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
        navigator.geolocation.getCurrentPosition(this.success, this.failure, options)
        
    }
    success(position:any) {
        var coords = position.coords;
        console.log(coords);
        axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.REACT_APP_API_KEY}`, {
            params: {
                postalCode: '10003'
            }
        })
        .then(response => {
            console.log(response.data._embedded.events)
        })
    }

    failure() {
        console.log('failed to get response')    
    }
    */

    render() {
        const things = this.props.events.map((e : Event) => (
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
        return things;
    }
};

const mapStateToProps = (state : RootState)  => {
    return {
        events: getDisplayEvents(state)
    }
};

export default connect(mapStateToProps)(EventList);