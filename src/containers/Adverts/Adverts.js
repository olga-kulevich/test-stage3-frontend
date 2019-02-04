import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Adverts.css';
import {AdvertsTable} from "../../components";

export default class Adverts extends PureComponent {
  render() {
    return (
      <div className="Adverts">
        <AdvertsTable adverts={this.props.adverts} onDeleteClick={this.props.delete}/>
        <button onClick={() => this.props.history.push("/adverts/new")}>AddAdvert</button>
      </div>
    );
  }
}

Adverts.propTypes = {
  adverts: PropTypes.array.isRequired,
  delete: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
