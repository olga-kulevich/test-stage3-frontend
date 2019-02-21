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
    this.goToAdvertsPage = this.goToAdvertsPage.bind(this);

    this.state = {
      title: "",
      category: "",
      description: "",
      price: ""
    };
  }

  handleAdvertAdd() {
    const data = this.state;
    data.id = Math.random();
    performAddAdvert(data);
    this.props.history.push(`/adverts`);
  }

  goToAdvertsPage() {
    this.props.history.push(`/adverts`);
  }

  render() {
    return (
      <div className="adverts-add">
        <AdvertForm advert={this.state} onSubmit={this.handleAdvertAdd} onCancelClick={this.goToAdvertsPage}
                    handleStateChange={(newState) => { this.setState(newState); }} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    adverts: state.Adverts.adverts.data
  }
};

AdvertAdd.propTypes = {
  adverts: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(AdvertAdd);
