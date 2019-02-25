import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button} from "../../components";

class AdvertForm extends PureComponent {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      fields: {
        title: this.props.advert.title,
        category: this.props.advert.category,
        price: this.props.advert.price,
        description: this.props.advert.description,
      },
      errors: {},

    }
  }

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Title
    if(!fields["title"]) {
      formIsValid = false;
      errors["title"] = "Enter new Title";
    }

    if(typeof fields["title"] !== "undefined"){
      if(!fields["title"].match(/^[a-zA-Z0-9_. -,]*$/)){
        formIsValid = false;
        errors["title"] = "Only letters, numbers, '-', '.'";
      }
    }

    //Category
    if(typeof fields["category"] !== "undefined"){
      if(!fields["category"].match(/^[a-zA-Z0-9_. -,]*$/)){
        formIsValid = false;
        errors["category"] = "Only letters, numbers, '-', '.', ','";
      }
    }

    //Description
    if(typeof fields["description"] !== "undefined"){
      if(!fields["description"].match(/^[a-zA-Z0-9_. -,]*$/)){
        formIsValid = false;
        errors["description"] = "Only letters, numbers, '-', '.', ','";
      }
    }

    //Price
    if(typeof fields["price"] !== "undefined"){
      if(!fields["price"].match(/^[0-9]\d*$/)){
        formIsValid = false;
        errors["price"] = "Only positive numeric value";
      }
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let fields = this.state.fields;
    fields[name] = value;
    this.setState({fields});
    this.props.handleStateChange({
      [name]: value
    });

  }

  handleSubmit(event) {
    event.preventDefault();
    const { onSubmit } = this.props;
    if(this.handleValidation()){
      onSubmit();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="center">
          <label>Title</label>
          <input type="text" name="title" size="60" className="inputs" value={this.props.advert.title} onChange={this.handleInputChange}/>
        </div>
        <div className="center" style={{color: "red"}}>{this.state.errors["title"]}</div>

        <div className="center">
          <label>Category</label>
          <input type="text" name="category" size="60" className="inputs" value={this.props.advert.category} onChange={this.handleInputChange}/>
        </div>
        <div className="center" style={{color: "red"}}>{this.state.errors["category"]}</div>

        <div className="center">
          <label>Description</label>
          <textarea rows="10" cols="59" name="description" className="inputs" value={this.props.advert.description} onChange={this.handleInputChange}/>
        </div>
        <div className="center" style={{color: "red"}}>{this.state.errors["description"]}</div>

        <div className="center">
          <label>Price</label>
          <input type="number" name="price" size="60" className="inputs" value={this.props.advert.price} onChange={this.handleInputChange}/>
        </div>
        <div className="center" style={{color: "red"}}>{this.state.errors["price"]}</div>

        <div className="center">
          <Button>Save</Button>
          <Button onClick={(event) => {
            event.preventDefault();
            this.props.onCancelClick();
          }}>
            Cancel
          </Button>
        </div>
      </form>
    );
  }
}

AdvertForm.defaultProps = {
  advert: {
    title: '',
    category: '',
    description: '',
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
