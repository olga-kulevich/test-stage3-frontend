import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

class CategoryList extends PureComponent {
  constructor(props) {
    super(props);
    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      select: 0,
      selectCategory: [
        {
          id: '0',
          name: ''
        },
        {
          id: '1',
          name: 'Realty'
        },
        {
          id: '2',
          name: 'Auto and transport'
        },
        {
          id: '3',
          name: 'Mechanism'
        },
        {
          id: '4',
          name: 'Fashion & Style'
        },
        {
          id: '5',
          name: 'Home'
        },
        {
          id: '6',
          name: 'Repair and construction'
        },
        {
          id: '7',
          name: 'Garden'
        },
        {
          id: '8',
          name: 'Services'
        },
        {
          id: '9',
          name: 'Other'
        }
      ]
    }
  }

  handleFilter(event) {
    const { value } = event.target;
    this.setState({
      select: value,
    });

    let category = '';
    switch (value) {
      case '0':
        category = '';
        break;
      case '1':
        category = 'Realty';
        break;
      case '2':
        category = 'Auto and transport';
        break;
      case '3':
        category = 'Mechanism';
        break;
      case '4':
        category = 'Fashion & Style';
        break;
      case '5':
        category = 'Home';
        break;
      case '6':
        category = 'Repair and construction';
        break;
      case '7':
        category = 'Garden';
        break;
      case '8':
        category = 'Services';
        break;
      case '9':
        category = 'Other';
        break;
      default:
        category = '';
    }

    const {onSelectChange} = this.props;
    if (typeof (onSelectChange) === 'function') {
      onSelectChange(category);
    }
  }

  render() {
    const { select, selectCategory } = this.state;
    const options = selectCategory.map((item) => {
      return <option key={item.id} value={item.id}>{item.name}</option>;
    });

    return (
      <select onChange={this.handleFilter} name="filter" value={select}>
        {options}
      </select>
    )
  }
}

CategoryList.propTypes = {
  onSelectChange: PropTypes.func.isRequired,
};

export default CategoryList;
