import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { taskListener } from './redux/sagas/index'
import { Provider } from 'react-redux'

import tasksReducer from './redux/reducers/tasks-reducer'
import operationReducer from './redux/reducers/operations-result-reducer'
import contextReducer from './redux/reducers/app-context-reducer'
import authReducer from './redux/reducers/auth-reducer'
import taskInfoReducer from './redux/reducers/task-info-reducer'
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  combineReducers({
    tasksReducer : tasksReducer,
    operationReducer : operationReducer,
    contextReducer : contextReducer,
    authReducer : authReducer,
    taskInfoReducer : taskInfoReducer
  }),
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(taskListener)


  ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
