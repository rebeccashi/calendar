import {
    FilterState,
    FilterActionTypes
} from './filterTypes'

const initialState: FilterState = {
    displayFilter: 'SHOW_ALL'   
};

export function filterReducer (
    state = initialState,
    action: FilterActionTypes

) : FilterState {
    switch(action.type) {
        default: 
            return state;
    }
}