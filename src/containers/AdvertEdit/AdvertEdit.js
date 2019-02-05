import React, {PureComponent} from 'react';
import './AdvertEdit.css';
import Adverts from "../Adverts";
import PropTypes from "prop-types";

export default class AdvertEdit extends PureComponent {
  render() {
    const { params } = this.props.match;
    return (
      <div>
        <h1>AdvertEdit {params.id}</h1>
      </div>
    )
  }
}

Adverts.propTypes = {
  match: PropTypes.object.isRequired
};
