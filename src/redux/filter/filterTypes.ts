export interface FilterState {
    displayFilter: string,
}

export const SORT = 'SORT';
export const CHANGE_DISPLAY = 'CHANGE_DISPLAY';

export interface changeFilterAction {
    type: typeof CHANGE_DISPLAY
}

interface sortAction {
    type: typeof SORT;
}

interface changeDisplayAction {
    type: typeof CHANGE_DISPLAY
} 

export type FilterActionTypes = sortAction | changeDisplayAction;
