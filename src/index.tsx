import * as React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';   //the compiler can't find react-redux
import reducer from './store/reducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.d.ts'

const store = createStore(reducer);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));