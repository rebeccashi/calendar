import {createSelector} from 'reselect';
import {CalendarState, Event} from './calendar/calendarTypes';
import {FilterState} from './filter/filterTypes'
import { RootState } from '..';

const getDisplay = (state : RootState) => state.filter.displayFilter;
const getEvents = (state: RootState) => state.calendar.events

export const getDisplayEvents = createSelector(
    [getEvents, getDisplay],
    (events: ReturnType<typeof getEvents>, displayFilter: ReturnType<typeof getDisplay>)
    : Event[] => {
        switch (displayFilter) {
            case 'SHOW_ALL':
                return events
            default:
                return events
        }
    }
)
