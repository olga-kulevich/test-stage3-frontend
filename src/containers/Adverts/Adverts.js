import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Adverts.css';
import {AdvertsTable} from "../../components";

class Adverts extends PureComponent {
  render() {
    return (
      <div className="Adverts">
        <AdvertsTable/>
        <button onClick={() => this.props.history.push("/adverts/new")}>AddAdvert</button>
        {console.log(this.props.adverts)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adverts: state
  }
};

Adverts.propTypes = {
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Adverts);