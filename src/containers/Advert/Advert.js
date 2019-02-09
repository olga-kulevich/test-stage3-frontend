import React, { PureComponent } from 'react';
import './Advert.css';
import PropTypes from "prop-types";
import Adverts from "../Adverts";

export default class Advert extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { params } = this.props.match;
    return (
      <div>
        <h1>Advert {params.id}</h1>
      </div>
    )
  }
}

Adverts.propTypes = {
  match: PropTypes.object.isRequired
};
