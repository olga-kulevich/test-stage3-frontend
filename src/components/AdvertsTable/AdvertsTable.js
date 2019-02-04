import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom'

class AdvertsTable extends PureComponent {
  constructor(props) {
    super(props);
    this.handleDeleteEvent = this.handleDeleteEvent.bind(this);
  }

  handleDeleteEvent(id) {
    const { onDeleteClick } = this.props;
    onDeleteClick(id);
  }

  renderRows(adverts) {

    return adverts.map(advert => (
      <tr key={advert.id}>
        <td>
          <Link to={`/adverts/${advert.id}`}>{advert.title}</Link>
        </td>
        <td>{advert.category}</td>
        <td>{advert.price}</td>
        <td>
          <button onClick={() => this.handleDeleteEvent(advert.id)}>Delete</button>
        </td>
        <td>
          <button onClick={() => this.props.history.push(`/adverts/${advert.id}/edit`)}>Edit</button>
        </td>
      </tr>
    ));
  }

  render() {
    const { adverts } = this.props;
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
        <tbody>{this.renderRows(adverts)}</tbody>
      </table>
    );
  }
}

AdvertsTable.propTypes = {
  adverts: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(AdvertsTable);
