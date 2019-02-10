import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button} from "../../components";

class AdvertForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.props.handleStateChange({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title
          <input type="text" name="title" value={this.props.advert.title} onChange={this.handleInputChange}/>
        </label>

        <label>
          Category
          <input type="text" name="category" value={this.props.advert.category} onChange={this.handleInputChange}/>
        </label>

        <label>
          Price
          <input type="number" name="price" value={this.props.advert.price} onChange={this.handleInputChange}/>
        </label>

        <Button value='Save'/>
        <Button value='Cancel' onClick={(event) => {
          event.preventDefault();
          this.props.onCancelClick();
        }}/>
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
  onCancelClick: PropTypes.func.isRequired,
  handleStateChange: PropTypes.func.isRequired
};

export default AdvertForm;
