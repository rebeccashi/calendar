import React, {Component} from 'react';
import {connect} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import EventItem from './EventItem'
import {Event, CalendarState} from '../store/types'

interface ListProps {
    events: Event[]
};

class EventList extends Component<ListProps> {
    
    render() {
        const list = this.props.events.map((e : Event) => {
            return (
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
        )});
       return (
           <List>
               {list}
           </List>
       )
        
    }
};

const mapStateToProps = (state: CalendarState)  => {
    return {
        events: state.events
    }
};

export default connect(mapStateToProps)(EventList);