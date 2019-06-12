import {
    CalendarState,
    Event 
} from './types';

const initialState : CalendarState = {
    events: [
        {
            name: "Go to the gym", 
            date: "2019/6/11", 
            startTime:"5pm", 
            endTime: "6pm", 
            location: "gym", 
            username: "Rebecca", 
            id: "Go the gym-2019/6/11" 
        },
        {
            name: "Go to the gym", 
            date: "2019/6/11", 
            startTime:"5pm", 
            endTime: "6pm", 
            location: "gym", 
            username: "Rebecca", 
            id: "Go the gym-2019/6/11" 
        },
        {
            name: "Go to the gym", 
            date: "2019/6/11", 
            startTime:"5pm", 
            endTime: "6pm", 
            location: "gym", 
            username: "Rebecca", 
            id: "Go the gym-2019/6/11" 
        },
        {
            name: "Go to the gym", 
            date: "2019/6/11", 
            startTime:"5pm", 
            endTime: "6pm", 
            location: "gym", 
            username: "Rebecca", 
            id: "Go the gym-2019/6/11" 
        },
        {
            name: "Go to the gym", 
            date: "2019/6/11", 
            startTime:"5pm", 
            endTime: "6pm", 
            location: "gym", 
            username: "Rebecca", 
            id: "Go the gym-2019/6/11" 
        }
    ]   
};

export function calendarReducer(state = initialState, action:any) : CalendarState {
    return state;
};

export default calendarReducer;