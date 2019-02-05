import React, { PureComponent } from 'react';
import './AdvertAdd.css';
import { AdvertForm } from "../../components";
import PropTypes from "prop-types";

export default class AdvertAdd extends PureComponent {
  render() {
    const { onAddAdvert } = this.props;
    return (
      <div>
        <AdvertForm onAddAdvert={onAddAdvert}/>
      </div>
    )
  }
}

AdvertAdd.propTypes = {
  onAddAdvert: PropTypes.func.isRequired
};
