import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './Adverts.css';
import {AdvertsTable, Button, Loader, Sorting} from "../../components";
import { performGetAdverts, performDeleteAdvert } from '../../action_performers/adverts';
import {Link} from "react-router-dom";

class Adverts extends PureComponent {
  constructor(props) {
    super(props);
    this.handleAdvertDelete = this.handleAdvertDelete.bind(this);
    this.goToAdvertEditPage = this.goToAdvertEditPage.bind(this);
    this.goToAdvertPage = this.goToAdvertPage.bind(this);
  }

  componentDidMount() {
    performGetAdverts();
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
        <Sorting />
        <AdvertsTable adverts={this.props.adverts} onDeleteClick={this.handleAdvertDelete}
                      onClick={this.goToAdvertEditPage}
                      onTitleClick={this.goToAdvertPage}
        />
        <Link to="/adverts/new">
          <Button>
            Add Advert
          </Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.Adverts.filter,
    adverts: state.Adverts.adverts.data,
    loading: state.Adverts.adverts.loading
  }
};

Adverts.propTypes = {
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Adverts);