import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Main, Adverts, Authors, Advert, Author, AuthorAdd, AuthorEdit, AdvertAdd, AdvertEdit } from './containers';
import { PATHS } from './constants';
import PropTypes from "prop-types";

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
              <Link to={PATHS.adverts.path}>Adverts</Link>
            </li>
            <li>
              <Link to={PATHS.authors.path}>Authors</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path={PATHS.main.path} component={Main}/>
            <Route exact path={PATHS.adverts.path} render={(props) => (
              <Adverts {...props} adverts={this.state.adverts.map(advert => {return {...advert}})}
                       delete={this.deleteAdvert}
              />
            )}/>
            <Route exact path={PATHS.authors.path} component={Authors}/>
            <Route exact path={PATHS.advert.path} component={Advert}/>
            <Route exact path={PATHS.author.path} component={Author}/>
            <Route exact path={PATHS.advertEdit.path} component={AdvertEdit}/>
            <Route exact path={PATHS.authorEdit.path} component={AuthorEdit}/>
            <Route exact path="/adverts/new" render={(props) => (
              <AdvertAdd {...props} add={this.addAdvert}/>
            )}
            />
            <Route exact path="" render={(props) => (
              <AuthorAdd {...props} />
            )}
            />
          </Switch>
        </div>
      </Router>
    </div>
  }
}

Root.propTypes = {
  adverts: PropTypes.array.isRequired
};

ReactDOM.render(<Root adverts={ADVERTS} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
