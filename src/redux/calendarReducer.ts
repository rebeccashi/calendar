import {
    CalendarState,
    ADD_EVENT
} from './types';
import moment from 'moment';

const initialState : CalendarState = {
    events: [
        {
            name: "Go to the gym", 
            date: moment(), 
            startTime:moment(), 
            endTime: moment(), 
            location: "gym", 
            username: "Rebecca", 
            id: "Rebecca-2019/6/11-Go the gym" 
        }
    ],
    visibilityFilter: 'SHOW_ALL'   
};

export function calendarReducer(state = initialState, action: any) : CalendarState {
    switch(action.type) {
        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload],
            }
    }

    return state;
};

export default calendarReducer;