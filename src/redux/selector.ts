import {createSelector} from 'reselect';
import {Event} from './calendar/calendarTypes';
import { RootState } from '..';
import moment from 'moment';

const getEvents = (state: RootState) => state.calendar.events
const getFilter = (state : RootState) => state.filter;

export const getDisplayEvents = createSelector(
    [getEvents, getFilter],
    (events, filter)
    : Event[] => {
        let visibleEvents;
        switch (filter.display) {
            case 'SHOW_ALL':
                visibleEvents = [...events];
            default:
                visibleEvents = [...events];
        }
        if (filter.latest) {
            visibleEvents.sort((a, b) => {
                if (moment.min(a.date, b.date) === a.date) {
                    return 1
                } else {
                    return -1
                }
            })  
        }
        
        if (filter.filterObject) {
            if (filter.filterObject.filterOption === 'before') {
                visibleEvents = visibleEvents.filter((event) => {
                    return moment.min(event.date,filter.filterObject!.filterDate) === event.date
                })
            } else if (filter.filterObject.filterOption === 'after') {
                visibleEvents = visibleEvents.filter((event) => {
                    return moment.min(event.date,filter.filterObject!.filterDate) === filter.filterObject!.filterDate
                })
            }
        }
        return visibleEvents;
    }
)