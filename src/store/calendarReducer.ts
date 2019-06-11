import {
    CalendarState,
    Event 
} from './types';

const initialState : CalendarState = {
    events: []   
};

export function calendarReducer(state = initialState, action:any) : CalendarState {
    return state;
};

export default calendarReducer;