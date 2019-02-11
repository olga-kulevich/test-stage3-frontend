import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './Adverts.css';
import {AdvertsTable, Button, Loader} from "../../components";
import { performGetAdverts, performDeleteAdvert } from '../../action_performers/adverts';

class Adverts extends PureComponent {
  constructor(props) {
    super(props);
    this.goToAdvertAddPage = this.goToAdvertAddPage.bind(this);
    this.handleAdvertDelete = this.handleAdvertDelete.bind(this);
    this.goToAdvertEditPage = this.goToAdvertEditPage.bind(this);
    this.goToAdvertPage = this.goToAdvertPage.bind(this);
  }

  componentDidMount() {
    performGetAdverts();
  }

  goToAdvertAddPage() {
    this.props.history.push("/adverts/new");
  }

  handleAdvertDelete(id) {
    performDeleteAdvert(id);
  }

  goToAdvertEditPage(id) {
    this.props.history.push(`/adverts/${id}/edit`);
  }

  goToAdvertPage(id) {
    this.props.history.push(`/adverts/${id}`);
  }

  render() {
    if (this.props.loading) {
      return <Loader>g</Loader>;
    }

    return (
      <div className="adverts">
        <AdvertsTable adverts={this.props.adverts} onDeleteClick={this.handleAdvertDelete}
                      onClick={this.goToAdvertEditPage}
                      onTitleClick={this.goToAdvertPage}
        />
        <Button onClick={this.goToAdvertAddPage}>
          Add Advert
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adverts: state.Adverts.adverts.data,
    loading: state.Adverts.adverts.loading
  }
};

Adverts.propTypes = {
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Adverts);