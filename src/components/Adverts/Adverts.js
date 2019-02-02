import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Adverts.css';
import {AdvertForm, AdvertsTable} from "../index";
import {Link} from "react-router-dom";

const ADVERTS = [
  {id: 1, category: 'Sporting Goods', price: '$49.99', title: 'Football'},
  {id: 2, category: 'Sporting Goods', price: '$9.99', title: 'Baseball'},
  {id: 3, category: 'Sporting Goods', price: '$29.99', title: 'Basketball'},
  {id: 4, category: 'Electronics', price: '$99.99', title: 'iPod Touch'},
  {id: 5, category: 'Electronics', price: '$399.99', title: 'iPhone 5'},
  {id: 6, category: 'Electronics', price: '$199.99', title: 'Nexus 7'}
];

export default class Adverts extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { adverts: ADVERTS };

    this.handleDeleteAdvert = this.handleDeleteAdvert.bind(this);
    this.handleAddAdvert = this.handleAddAdvert.bind(this);
  }

  handleDeleteAdvert(id) {
    const adverts = this.state.adverts.filter((advert) => {
      return advert.id != id;
    });
    this.setState({adverts: adverts});
    console.log(1, adverts);
  }

  handleAddAdvert(advert) {
    const newAdvert = {
      id: 8,
      category: advert.category,
      price: advert.price,
      title: advert.title
    };
    const aaa = this.state.adverts.push(newAdvert);
    this.setState({adverts: aaa});
    console.log('added1', aaa);
  }

  render() {
    return (
      <div className="Adverts">
        <AdvertsTable adverts={this.state.adverts} onDeleteClick={this.handleDeleteAdvert}/>
        <AdvertForm adverts={this.state.adverts} onAddAdvert={this.handleAddAdvert}/>
        <button onClick={() => this.props.history.push("/adverts/new")}>AddAdvert</button>
      </div>
    );
  }
}

Adverts.propTypes = {
  adverts: PropTypes.array.isRequired,
};