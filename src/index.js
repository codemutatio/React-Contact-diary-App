import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import contactReducer from './reducers/contactReducer';
import appSaga from './saga';
import * as serviceWorker from './serviceWorker';

const saga = createSagaMiddleware();

const store = createStore(contactReducer, composeWithDevTools(applyMiddleware(saga)));
saga.run(appSaga);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
