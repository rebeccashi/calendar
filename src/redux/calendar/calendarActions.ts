import { ADD_EVENT} from './calendarTypes';

export function addEvent(event: Event) {
    return {
        type: ADD_EVENT,
        payload: Event,
    }
};
