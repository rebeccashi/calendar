import {
    CalendarState,
    ADD_EVENT
} from './types';
import moment from 'moment';

const initialState : CalendarState = {
    events: [
        {
            name: "Go to the gym", 
            date: '2019-6-11', 
            startTime:"5pm", 
            endTime: "6pm", 
            location: "gym", 
            username: "Rebecca", 
            id: "Go the gym-2019/6/11" 
        },
        {
            name: "Go to the gym", 
            date: '2019-6-11', 
            startTime:"5pm", 
            endTime: "6pm", 
            location: "gym", 
            username: "Rebecca", 
            id: "Go the gym-2019/6/11" 
        },
        {
            name: "Go to the gym", 
            date: '2019-6-11',  
            startTime:"5pm", 
            endTime: "6pm", 
            location: "gym", 
            username: "Rebecca", 
            id: "Go the gym-2019/6/11" 
        },
        {
            name: "Go to the gym", 
            date: '2019-6-11', 
            startTime:"5pm", 
            endTime: "6pm", 
            location: "gym", 
            username: "Rebecca", 
            id: "Go the gym-2019/6/11" 
        },
        {
            name: "Go to the gym", 
            date: '2019-6-11', 
            startTime:"5pm", 
            endTime: "6pm", 
            location: "gym", 
            username: "Rebecca", 
            id: "Go the gym-2019/6/11" 
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