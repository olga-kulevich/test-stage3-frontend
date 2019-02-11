import React, { PureComponent } from 'react';
import './Advert.css';
import PropTypes from "prop-types";
import Adverts from "../Adverts";
import {performGetAdvert} from "../../action_performers/adverts";
import {connect} from "react-redux";
import {Button} from "../../components";
import {Link} from "react-router-dom";

class Advert extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      description: '',
      price: ''
    };
  }

  componentDidMount() {
    performGetAdvert(this.props.match.params.id);
  }

  render() {
    const {title, category, description, price} = this.props.advert;
    return (
      <div className="advert">
        <h3>Title:</h3>
        <p>{title}</p>
        <h3>Category:</h3>
        <p>{category}</p>
        <h3>Description:</h3>
        <p>{description}</p>
        <h3>Price:</h3>
        <p>{price}</p>

        <Link to="/adverts/">
          <Button>
            Cancel
          </Button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    advert: state.Adverts.advert.data
  }
};

Adverts.propTypes = {
  advert: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Advert);
