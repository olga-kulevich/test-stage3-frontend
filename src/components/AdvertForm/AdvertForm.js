import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button} from "../../components";

class AdvertForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.advert.title,
      category: this.props.advert.category,
      price: this.props.advert.price
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.advert.title !== prevProps.advert.title ||
      this.props.advert.category !== prevProps.advert.category ||
      this.props.advert.price !== prevProps.advert.price) {

      this.setState({
        title: this.props.advert.title,
        category: this.props.advert.category,
        price: this.props.advert.price
      })
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
     [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {onSubmit} = this.props;
    const data = {
      category: this.state.category,
      price: this.state.price,
      title: this.state.title
    };
    onSubmit(data);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title
          <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>
        </label>

        <label>
          Category
          <input type="text" name="category" value={this.state.category} onChange={this.handleInputChange}/>
        </label>

        <label>
          Price
          <input type="number" name="price" value={this.state.price} onChange={this.handleInputChange}/>
        </label>

        <Button value='Save' />
        <Button value='Cancel' onClick={(event) => {event.preventDefault(); this.props.onCancelClick();}} />
      </form>
    );
  }
}

AdvertForm.defaultProps = {
  advert: {
    title: '',
    category: '',
    price: ''
  }
};

AdvertForm.propTypes = {
  advert: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  onCancelClick: PropTypes.func.isRequired
};

export default AdvertForm;
