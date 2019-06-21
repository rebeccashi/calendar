import {FilterState, latestAction, dateAction} from './filterTypes'
import {reducerWithInitialState} from 'typescript-fsa-reducers';

const initialState: FilterState = {
    display: 'SHOW_ALL',
    latest: false,
    filterObject: null
};

export const filterReducer = reducerWithInitialState(initialState)
    .case(latestAction, (state) => ({
            ...state,
            latest: true
        }
    )) 
    .case(dateAction, (state, payload) => ({
            ...state,
            filterObject: {
                filterOption: payload.filterOption,
                filterDate: payload.filterDate
            }
        }
    ))
