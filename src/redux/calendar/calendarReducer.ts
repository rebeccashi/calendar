import {
    CalendarState,
    ADD_EVENT
} from './calendarTypes';
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
        },
        {
            name: "Go to the gym", 
            date: moment(), 
            startTime:moment(), 
            endTime: moment(), 
            location: "gym", 
            username: "Rebecca", 
            id: "Rebecca-2019/6/11-Go the gym" 
        },
        {
            name: "Go to the gym", 
            date: moment(), 
            startTime:moment(), 
            endTime: moment(), 
            location: "gym", 
            username: "Rebecca", 
            id: "Rebecca-2019/6/11-Go the gym" 
        },
        {
            name: "Go to the gym", 
            date: moment(), 
            startTime:moment(), 
            endTime: moment(), 
            location: "gym", 
            username: "Rebecca", 
            id: "Rebecca-2019/6/11-Go the gym" 
        },
    ]
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