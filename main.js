import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterApp from './reducers/redux';
import App from './component/app.jsx';
import {Router,HashRouter,Route,browserHistory} from 'react-router-dom';
const store = createStore(CounterApp);

render(
    <div>
    <Provider store={store}>
<App/>
    </Provider>
    </div>
,document.getElementById('app'));
