import React, { PureComponent } from 'react';
import './AdvertAdd.css';
import { AdvertForm } from "../../components";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {performAddAdvert} from "../../action_performers/adverts";

class AdvertAdd extends PureComponent {
  constructor(props) {
    super(props);
    this.handleAdvertAdd = this.handleAdvertAdd.bind(this);
  }

  handleAdvertAdd(data) {
    performAddAdvert(data);
    alert('Advert added successfully');
    this.props.history.push(`/adverts`);
    console.log(data);
  }

  render() {
    return (
      <div>
        <AdvertForm adverts={this.props.adverts} onAddClick={this.handleAdvertAdd}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    adverts: state.Adverts
  }
};

AdvertAdd.propTypes = {
  adverts: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(AdvertAdd);
