import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import './index.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes} from './services/routes'
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
