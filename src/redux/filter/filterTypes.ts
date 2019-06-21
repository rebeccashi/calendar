import moment from 'moment';

export interface FilterObject {
    filterOption: string,
    filterDate: moment.Moment,
}

export interface FilterState {
    display: string,
    latest?:boolean,
    filterObject?: FilterObject | null
}

export const LATEST = 'LATEST';
export const DATE = 'DATE';

interface latestAction {
    type: typeof LATEST
}

interface dateAction {
    type: typeof DATE,
    payload: FilterObject
}

export type FilterActionTypes = latestAction | dateAction;
