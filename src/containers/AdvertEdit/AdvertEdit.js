import React, {PureComponent} from 'react';
import './AdvertEdit.css';
import Adverts from "../Adverts";
import PropTypes from "prop-types";
import {AdvertForm} from "../../components";
import {connect} from "react-redux";
import {performGetAdvert, performEditAdvert} from "../../action_performers/adverts";

class AdvertEdit extends PureComponent {
  constructor(props) {
    super(props);
    this.handleAdvertEdit = this.handleAdvertEdit.bind(this);
  }

  componentDidMount() {
    performGetAdvert(this.props.match.params.id);
  }

  handleAdvertEdit(advert) {
    const id  = this.props.match.params.id;
    performEditAdvert(id, advert);
    this.props.history.push(`/adverts`);
  }

  render() {
    const { params } = this.props.match;
    return (
      <div>
        <AdvertForm advert={this.props.advert} onSubmit={this.handleAdvertEdit}/>
        <h1>AdvertEdit {params.id}</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    advert: state.Adverts.advert.data
  }
};

Adverts.propTypes = {
  advert: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(AdvertEdit);
