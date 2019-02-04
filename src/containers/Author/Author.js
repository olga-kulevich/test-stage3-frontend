import React, { PureComponent } from 'react';
import './Author.css';

export default class Author extends PureComponent {
  render() {
    const { params } = this.props.match;
    return (
      <div>
        <h1>Author {params.id}</h1>
      </div>
    )
  }
}