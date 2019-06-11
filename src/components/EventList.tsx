import React, {Component} from 'react';
import {connect} from 'react-redux';
import EventItem from './EventItem'
import {Event, CalendarState} from '../store/types'

interface ListProps {
    events: Event[]
};
  
class EventList extends Component<ListProps> {
    render() {
        const things = this.props.events.map((e : Event) => (
            <EventItem
                id={e.name}
                name = {e.name}
                date={e.date}
                startTime={e.startTime}
                endTime={e.endTime}
                location={e.location}
                notes={e.notes}
                username={e.username}
            />
        ));
        return things;
    }
};

const mapStateToProps = (state: CalendarState)  => {
    return {
        events: state.events
    }
};

export default connect(mapStateToProps)(EventList);