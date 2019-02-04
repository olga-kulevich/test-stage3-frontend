import React, { PureComponent } from 'react';
import './AuthorEdit.css';
import Adverts from "../Adverts";
import PropTypes from "prop-types";

export default class AuthorEdit extends PureComponent {
  render() {
    const { params } = this.props.match;
    return (
      <div>
        <h1>AuthorEdit {params.id}</h1>
      </div>
    )
  }
}

Adverts.propTypes = {
  match: PropTypes.object.isRequired
};
