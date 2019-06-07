import {
    CalendarState   
} from './types';

const initialState : CalendarState = {
    events: []   
};

export function reducer(state = initialState, action:any) : CalendarState {
    return state;
};

export default reducer;