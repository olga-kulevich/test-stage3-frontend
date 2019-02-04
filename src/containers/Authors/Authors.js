import React, { PureComponent } from 'react';
import './Authors.css';
import PropTypes from 'prop-types';

export default class Authors extends PureComponent {
  render() {
    return (
      <div className="Authors">
        <h1>Authors</h1>
        <button onClick={() => this.props.history.push("/authors/new")}>AddAuthor</button>
        <button onClick={() => this.props.history.push("/authors/42/edit")}>EditAuthor</button>
        <button onClick={() => this.props.history.push("/authors/42")}>ViewAuthor</button>
      </div>
    )
  }
}

Authors.propTypes = {
  history: PropTypes.object.isRequired
};
