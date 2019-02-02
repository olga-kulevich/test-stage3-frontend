import React, { PureComponent } from 'react';
import './Advert.css';

export default class Advert extends PureComponent {
  render() {
    const { params } = this.props.match;
    return (
      <div>
        <h1>Advert {params.id}</h1>
      </div>
    )
  }
}