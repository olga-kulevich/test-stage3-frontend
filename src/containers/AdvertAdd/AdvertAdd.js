import React, { PureComponent } from 'react';
import './AdvertAdd.css';
import { AdvertForm } from "../../components";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class AdvertAdd extends PureComponent {
  render() {
    return (
      <div>
        <AdvertForm/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    adverts: state
  }
};

AdvertAdd.propTypes = {
  adverts: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(AdvertAdd);
