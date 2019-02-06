import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class AdvertForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { title: '', category: '', price: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const data = {
      id: Math.random(),
      category: this.state.category,
      price: this.state.price,
      title: this.state.title
    };
    const {onAddClick} = this.props;
    onAddClick(data);
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

        <button>AddAdvert</button>
      </form>
    );
  }
}

AdvertForm.propTypes = {
  adverts: PropTypes.array.isRequired,
  onAddClick: PropTypes.func.isRequired
};

export default AdvertForm;
