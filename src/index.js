import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PropTypes from "prop-types";
import * as serviceWorker from './serviceWorker';
import './index.css';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import {Main, Adverts, Authors, Advert, Author, AuthorAdd, AuthorEdit, AdvertAdd, AdvertEdit} from './containers';
import {PATHS} from './constants';
import adReducer from './reducers/Ad.js';

const store = createStore(adReducer);

class Root extends Component {
  render() {
    return <div>
      <Router>
        <div>
          <ul>
            <li>
              <Link to={PATHS.adverts.path}>Adverts</Link>
            </li>
            <li>
              <Link to={PATHS.authors.path}>Authors</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path={PATHS.main.path} component={Main}/>
            <Route exact path={PATHS.adverts.path} component={Adverts}/>
            <Route exact path={PATHS.authors.path} component={Authors}/>
            <Route exact path={PATHS.advert.path} component={Advert}/>
            <Route exact path={PATHS.author.path} component={Author}/>
            <Route exact path={PATHS.advertEdit.path} component={AdvertEdit}/>
            <Route exact path={PATHS.authorEdit.path} component={AuthorEdit}/>
            <Route exact path="/adverts/new" component={AdvertAdd}/>
            <Route exact path="/authors/new" component={AuthorAdd}/>
          </Switch>
        </div>
      </Router>
    </div>
  }
}

Root.propTypes = {
  // here will be props
};

ReactDOM.render(
    <Provider store={store}>
      <Root/>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
