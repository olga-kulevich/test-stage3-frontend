import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

class Sorting extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSorting = this.handleSorting.bind(this);
    this.state = {
      select: '',
      selectFields: [
        {
          id: 1,
          name: 'Title ascending',
        },
        {
          id: 2,
          name: 'Title descending',
        },
        {
          id: 3,
          name: 'Category ascending',
        },
        {
          id: 4,
          name: 'Category descending',
        },
        {
          id: 5,
          name: 'Price ascending',
        },
        {
          id: 6,
          name: 'Price descending'
        }
      ]
    }
  }

  handleSorting(event) {
    const { value } = event.target;
    this.setState({
      select: value,
    });

    let direction = '';
    let field = '';
    switch (value) {
      case '1':
        field = 'title';
        direction = 'asc';
        break;
      case '2':
        field = 'title';
        direction = 'desc';
        break;
      case '3':
        field = 'category';
        direction = 'asc';
        break;
      case '4':
        field = 'category';
        direction = 'desc';
        break;
      case '5':
        field = 'price';
        direction = 'asc';
        break;
      case '6':
        field = 'price';
        direction = 'desc';
        break;
      default:
        field = 'title';
        direction = 'asc';
    }
    const {onSelectChange} = this.props;
    if (typeof (onSelectChange) === 'function') {
      onSelectChange(field, direction);
    }
  }

  render() {
    const { select, selectFields } = this.state;
    const options = selectFields.map((item) => {
      return <option key={item.id} value={item.id}>{item.name}</option>;
    });

    return (
      <select onChange={this.handleSorting} name="sort" value={select}>
        {options}
      </select>
    )
  }
}

Sorting.propTypes = {
  onSelectChange: PropTypes.func.isRequired,
};

export default Sorting;
