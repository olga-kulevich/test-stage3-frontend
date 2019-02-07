import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './Adverts.css';
import {AdvertsTable} from "../../components";
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
    console.log(id);
  }

  goToAdvertEditPage(id) {
    this.props.history.push(`/adverts/${id}/edit`);
  }

  goToAdvertPage(id) {
    this.props.history.push(`/adverts/${id}`);
  }

  render() {

    return (
      <div className="Adverts">
        <AdvertsTable adverts={this.props.adverts} onDeleteClick={this.handleAdvertDelete}
                      onEditClick={this.goToAdvertEditPage}
                      onTitleClick={this.goToAdvertPage}
        />
        <button onClick={this.goToAdvertAddPage}>AddAdvert</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adverts: state.Adverts.adverts.data
  }
};

Adverts.propTypes = {
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Adverts);