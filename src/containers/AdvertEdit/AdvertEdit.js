import React, {PureComponent} from 'react';
import './AdvertEdit.css';
import Adverts from "../Adverts";
import PropTypes from "prop-types";
import {AdvertForm, Loader} from "../../components";
import {connect} from "react-redux";
import {performGetAdvert, performEditAdvert} from "../../action_performers/adverts";

class AdvertEdit extends PureComponent {
  constructor(props) {
    super(props);
    this.handleAdvertEdit = this.handleAdvertEdit.bind(this);
    this.goToAdvertsPage = this.goToAdvertsPage.bind(this);

    this.state = {
      title: "",
      category: "",
      price: ""
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.advert.title !== prevProps.advert.title ||
      this.props.advert.category !== prevProps.advert.category ||
      this.props.advert.price !== prevProps.advert.price) {

      this.setState({
        title: this.props.advert.title,
        category: this.props.advert.category,
        price: this.props.advert.price
      })
    }
  }

  componentDidMount() {
    performGetAdvert(this.props.match.params.id);
  }

  handleAdvertEdit() {
    const id  = this.props.match.params.id;
    performEditAdvert(id, this.state);
    this.props.history.push(`/adverts`);
  }

  goToAdvertsPage() {
    this.props.history.push(`/adverts/`);
  }

  render() {
    if (this.props.loading) {
      return <Loader />;
    }

    return (
      <div className="advert-edit">
        <AdvertForm advert={this.state} onSubmit={this.handleAdvertEdit} onCancelClick={this.goToAdvertsPage}
                    handleStateChange={(newState) => { this.setState(newState); }} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    advert: state.Adverts.advert.data,
    loading: state.Adverts.advert.loading
  }
};

Adverts.propTypes = {
  advert: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(AdvertEdit);
