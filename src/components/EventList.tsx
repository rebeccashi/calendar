import React, {Component} from 'react';
import {connect} from 'react-redux';
import EventItem from './EventItem'
import {Event, CalendarState} from '../redux/types'
import { getVisibleEvents } from '../redux/selector';

interface ListProps {
    visibleEvents: Event[]
};
  
class EventList extends Component<ListProps> {
    render() {
        const list = this.props.visibleEvents.map((e : Event) => (
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
        return list;
    }
};

const mapStateToProps = (state: CalendarState)  => {
    return {
        visibleEvents: getVisibleEvents(state)
    }
};

export default connect(mapStateToProps)(EventList);