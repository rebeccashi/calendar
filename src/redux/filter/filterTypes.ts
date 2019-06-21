import moment from 'moment';
import actionCreatorFactory from 'typescript-fsa';

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

const actionCreator = actionCreatorFactory();
export const latestAction = actionCreator<{}>(LATEST);
export const dateAction = actionCreator<FilterObject>(DATE);
