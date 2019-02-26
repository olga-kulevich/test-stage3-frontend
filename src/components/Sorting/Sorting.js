import React, {PureComponent} from 'react';
import {performGetAdverts, performSortAdverts} from "../../action_performers/adverts";

class Sorting extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSorting = this.handleSorting.bind(this);
  }

  handleSorting(event) {
    const target = event.target;
    const value = target.value;
    let direction = '';
    let field = '';
    switch (value) {
      case 'titleAsc':
        field = 'title';
        direction = 'asc';
        break;
      case 'titleDesc':
        field = 'title';
        direction = 'desc';
        break;
      case 'categoryAsc':
        field = 'category';
        direction = 'asc';
        break;
      case 'categoryDesc':
        field = 'category';
        direction = 'desc';
        break;
      case 'priceAsc':
        field = 'price';
        direction = 'asc';
        break;
      case 'priceDesc':
        field = 'price';
        direction = 'desc';
        break;
      default:
        field = 'price';
        direction = 'asc';
    }
    performSortAdverts(field, direction);
    performGetAdverts();
  }

  render() {
    return (
      <select onChange={this.handleSorting}>
        <option value="titleAsc">Title ascending</option>
        <option value="titleDesc">Title descending</option>
        <option value="categoryAsc">Category ascending</option>
        <option value="categoryDesc">Category descending</option>
        <option value="priceAsc">Price ascending</option>
        <option value="priceDesc">Price descending</option>
      </select>
    )
  }
}

export default Sorting;
