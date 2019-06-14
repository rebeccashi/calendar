import {createSelector} from 'reselect';
import {CalendarState} from './types';

const getVisibilityFilter = (state : CalendarState) => state.visibilityFilter
const getEvents = (state: CalendarState) => state.events

export const getVisibleEvents = createSelector(
    [getVisibilityFilter, getEvents],
    (visibilityFilter, events) => {
        switch (visibilityFilter) {
            case 'SHOW_ALL':
                return events
            default:
                return events
        }
    }
)
