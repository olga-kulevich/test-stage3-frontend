import React, { PureComponent } from 'react';
import './AdvertAdd.css';
import { AdvertForm } from "../../components";
import PropTypes from "prop-types";

export default class AdvertAdd extends PureComponent {
  render() {
    const { add } = this.props;
    return (
      <div>
        <AdvertForm onAddAdvert={add}/>
      </div>
    )
  }
}

AdvertAdd.propTypes = {
  add: PropTypes.func.isRequired
};