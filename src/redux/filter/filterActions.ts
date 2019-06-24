import {FilterObject, LATEST, DATE} from './filterTypes';

export function sortByLatest() {
    return {
        type: LATEST
    }
}

export function filterByDate(filter : FilterObject) {
    return {
        type: DATE,
        payload: filter
    }
}