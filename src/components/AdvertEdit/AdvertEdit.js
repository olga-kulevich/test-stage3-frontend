import React, { PureComponent } from 'react';
import './AdvertEdit.css';

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
