import {
    FilterState,
    FilterActionTypes
} from './filterTypes'

const initialState: FilterState = {
    display: 'SHOW_ALL',
    latest: false,
    filterObject: null
};

export function filterReducer (
    state = initialState,
    action: FilterActionTypes
) : FilterState {
    
    switch(action.type) {
        case 'LATEST':
            return {
                ...state,
                latest: true,
            };
        case 'DATE':
            return {
                ...state,
                filterObject: {
                    filterOption: action.payload.filterOption,
                    filterDate: action.payload.filterDate
                }
            }
        default: 
            return state;
    }
}