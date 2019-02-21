import React, {PureComponent} from 'react';
import './AuthorAdd.css';
import Adverts from "../Adverts";
import PropTypes from "prop-types";

export default class AuthorAdd extends PureComponent {
  render() {
    return (
      <div>
        <h1>AuthorAdd</h1>
        <button onClick={() => this.props.history.push("/authors")}>Add</button>
      </div>
    )
  }
}

Adverts.propTypes = {
  history: PropTypes.object.isRequired
};
