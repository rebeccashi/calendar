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
    events: Event[]
}

export const ADD_EVENT = 'ADD_EVENT';

const actionCreator = actionCreatorFactory();
export const addEventAction = actionCreator<Event>(ADD_EVENT);

export interface addEventAction {
    type: typeof ADD_EVENT,
    payload: Event
}
