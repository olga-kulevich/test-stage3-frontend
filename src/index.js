import React, { Component } from 'react';
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

const ADVERTS = [
  {id: 1, category: 'Sporting Goods', price: '$49.99', title: 'Football'},
  {id: 2, category: 'Sporting Goods', price: '$9.99', title: 'Baseball'},
  {id: 3, category: 'Sporting Goods', price: '$29.99', title: 'Basketball'},
  {id: 4, category: 'Electronics', price: '$99.99', title: 'iPod Touch'},
  {id: 5, category: 'Electronics', price: '$399.99', title: 'iPhone 5'},
  {id: 6, category: 'Electronics', price: '$199.99', title: 'Nexus 7'}
];

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {adverts: props.adverts};

    this.deleteAdvert = this.deleteAdvert.bind(this);
    this.addAdvert = this.addAdvert.bind(this);
  }

  deleteAdvert(id) {
    const adverts = this.state.adverts.filter((advert) => {
      return advert.id !== id;
    });
    this.setState({adverts: adverts});
  };

  addAdvert(advert) {
    const newAdvert = {
      id: Math.random(),
      category: advert.category,
      price: advert.price,
      title: advert.title
    };
    this.setState({adverts: [...this.state.adverts, newAdvert]});
  };

  render() {
    return <div>
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
            <Route exact path="/" component={App}/>
            <Route exact path="/adverts" render={(props) => (
              <Adverts {...props} adverts={this.state.adverts.map(advert => {return {...advert}})}
                       delete={this.deleteAdvert}
              />
            )}/>
            <Route exact path="/authors" component={Authors}/>
            <Route exact path="/adverts/:id(\d+)" component={Advert}/>
            <Route exact path="/authors/:id(\d+)" component={Author}/>
            <Route exact path="/adverts/:id/edit" component={AdvertEdit}/>
            <Route exact path="/authors/:id/edit" component={AuthorEdit}/>
            <Route exact path="/adverts/new" render={(props) => (
              <AdvertAdd {...props} add={this.addAdvert}/>
            )}
            />
            <Route exact path="/authors/new" render={(props) => (
              <AuthorAdd {...props} />
            )}
            />
          </Switch>
        </div>
      </Router>
    </div>
  }
}

ReactDOM.render(<Root adverts={ADVERTS} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
