import moment from 'moment';
import actionCreatorFactory from 'typescript-fsa';

export interface Event {
    name: string,
    date: moment.Moment,
    startTime: moment.Moment,
    endTime: moment.Moment,
    location?: string,
    notes?: string,
    username: string,   //not alterable
    id: string
};

export interface CalendarState {
    events: Event[],
    musicEvents: Event[]
}

export const ADD_EVENT = 'ADD_EVENT';
export const ADD_MUSIC_EVENTS = 'ADD_MUSIC_EVENTS';

const actionCreator = actionCreatorFactory();
export const addEventAction = actionCreator<Event>(ADD_EVENT);
export const addMusicEventsAction = actionCreator<[]>(ADD_MUSIC_EVENTS);
/*
export interface addEventAction {
    type: typeof ADD_EVENT,
    payload: Event
}
*/