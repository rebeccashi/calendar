import {
    CalendarState,
    addEventAction, 
} from './calendarTypes';
import moment from 'moment';
import {reducerWithInitialState} from 'typescript-fsa-reducers';

const initialState : CalendarState = {
    events: [
        {
            name: "Go to the gym 4", 
            date: moment("2016-02-07"), 
            startTime:moment(), 
            endTime: moment(), 
            location: "gym", 
            username: "Rebecca", 
            id: "Rebecca-2019/6/11-Go the gym" 
        },
        {
            name: "Go to the gym 2", 
            date: moment("2019-3-20"), 
            startTime:moment(), 
            endTime: moment(), 
            location: "gym", 
            username: "Rebecca", 
            id: "Rebecca-2019/6/11-Go the gym" 
        },
        {
            name: "Go to the gym 3", 
            date: moment("2018-12-25"), 
            startTime:moment(), 
            endTime: moment(), 
            location: "gym", 
            username: "Rebecca", 
            id: "Rebecca-2019/6/11-Go the gym" 
        },
        {
            name: "Go to the gym 1", 
            date: moment("2019-3-25"), 
            startTime:moment(), 
            endTime: moment(), 
            location: "gym", 
            username: "Rebecca", 
            id: "Rebecca-2019/6/11-Go the gym" 
        },
    ],
};

export const calendarReducer = reducerWithInitialState(initialState)
    .case(addEventAction, (state, payload) => ({
        ...state,
        events: [...state.events, payload],
    }));