import * as React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';   //the compiler can't find react-redux
import {calendarReducer} from './redux/calendar/calendarReducer';
import {filterReducer} from './redux/filter/filterReducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.d.ts'

// require('dotenv').config();
// console.log('-->', process.env.API_KEY);

const rootReducer = combineReducers({
    calendar: calendarReducer,
    filter: filterReducer
})

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));