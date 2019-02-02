import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Adverts from './components/Adverts';
import Authors from './components/Authors';
import Advert from './components/Advert';
import Author from './components/Author';
import AuthorAdd from './components/AuthorAdd';
import AuthorEdit from './components/AuthorEdit';
import AdvertAdd from './components/AdvertAdd';
import AdvertEdit from './components/AdvertEdit';

const routing = (
  <div>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/adverts">Adverts</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/adverts" component={Adverts} />
          <Route exact path="/authors" component={Authors} />
          <Route exact path="/adverts/:id" component={Advert} />
          <Route exact path="/authors/:id" component={Author} />
          <Route exact path="/adverts/:id/edit" component={AdvertEdit} />
          <Route exact path="/authors/:id/edit" component={AuthorEdit} />
          <Route exact path="/adverts/new" component={AdvertAdd} />
          <Route exact path="/authors/new" component={AuthorAdd} />
        </Switch>
      </div>
    </Router>
  </div>

);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
