import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class AdvertForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { title: '', category: '', price: '' };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }

  handlePriceChange(event) {
    this.setState({ price: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      id: Math.random(),
      category: this.state.category,
      price: this.state.price,
      title: this.state.title
    };

    this.props.dispatch({
      type:'ADD_ADVERT',
      data});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title
          <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
        </label>

        <label>
          Category
          <input type="text" value={this.state.category} onChange={this.handleCategoryChange}/>
        </label>

        <label>
          Price
          <input type="number" value={this.state.price} onChange={this.handlePriceChange}/>
        </label>

        <button>AddAdvert</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adverts: state
  }
};

AdvertForm.propTypes = {
  adverts: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(AdvertForm);
