import moment, { MomentBuiltinFormat } from 'moment';

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

export interface addEventAction {
    type: typeof ADD_EVENT;
    payload: Event;
}