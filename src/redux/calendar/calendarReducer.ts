import {
    CalendarState,
    Event,
    addEventAction, 
    addMusicEventsAction
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
    musicEvents: [],
};

export const calendarReducer = reducerWithInitialState(initialState)
    .case(addEventAction, (state, payload) => ({
        ...state,
        events: [...state.events, payload],
    }))
    .case(addMusicEventsAction, (state, payload) => {
        const array: Event[] = [];
        payload.map((e : any) => {
            const event: Event = {
                name: e.name,
                id: e.id,
                date: moment(e.dates.start.localDate),
                startTime: moment(e.dates.start.localTime.slice(0, 5), 'HH:mm'),
                endTime: moment(e.dates.start.localTime, 'HH:mm').add(3, "hours"),
                username: 'Ticket Master'
            };
            console.log(event);
            array.push(event);
        })
        return {
            ...state,
            musicEvents: array
        }
    })
;