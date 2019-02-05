import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom'
import { connect } from 'react-redux';


class AdvertsTable extends PureComponent {
  renderRows(adverts) {
    return adverts.map(advert => (
      <tr key={advert.id}>
        <td>
          <Link to={`/adverts/${advert.id}`}>{advert.title}</Link>
        </td>
        <td>{advert.category}</td>
        <td>{advert.price}</td>
        <td>
          <button onClick={() => this.props.dispatch({type: 'DELETE_ADVERT', id: advert.id})}>Delete</button>
        </td>
        <td>
          <button onClick={() => this.props.history.push(`/adverts/${advert.id}/edit`)}>Edit</button>
        </td>
      </tr>
    ));
  }

  render() {
    console.log(this.props.adverts);
    return (
      <table>
        <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
          <th>Delete</th>
          <th>Edit</th>
        </tr>
        </thead>
        <tbody>{this.renderRows(this.props.adverts)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adverts: state
  }
};

AdvertsTable.propTypes = {
  adverts: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withRouter(AdvertsTable));
