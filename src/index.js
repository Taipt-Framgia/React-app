import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { searchRobots, setRobots } from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk'
import 'tachyons';

const logger = createLogger();
const reducerRoot = combineReducers({searchRobots, setRobots});
const store = createStore(reducerRoot, applyMiddleware(thunkMiddleWare, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
