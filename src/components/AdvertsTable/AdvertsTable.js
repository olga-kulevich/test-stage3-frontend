import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class AdvertsTable extends PureComponent {
  renderRows(adverts) {
    const {onDeleteClick, onEditClick, onTitleClick} = this.props;
    return adverts.map(advert => (
      <tr key={advert.id} data-id={advert.id}>
        <td onClick={() => onTitleClick(advert.id)}>
          {advert.title}
        </td>
        <td>{advert.category}</td>
        <td>{advert.price}</td>
        <td>
          <button onClick={() => onDeleteClick(advert.id)}>Delete</button>
        </td>
        <td>
          <button onClick={() => onEditClick(advert.id)}>Edit</button>
        </td>
      </tr>
    ));
  }

  render() {
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

AdvertsTable.propTypes = {
  adverts: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default AdvertsTable;
