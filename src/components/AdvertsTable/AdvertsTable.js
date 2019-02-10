import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ButtonDelete, Button} from "../../components";

class AdvertsTable extends PureComponent {
  renderRows(adverts) {
    const {onDeleteClick, onClick, onTitleClick} = this.props;
    return adverts.map(advert => (
      <tr key={advert.id} data-id={advert.id}>
        <td onClick={() => onTitleClick(advert.id)}>
          {advert.title}
        </td>
        <td>{advert.category}</td>
        <td>{advert.price}</td>
        <td>
          <ButtonDelete onDeleteClick={onDeleteClick} id={advert.id} />
        </td>
        <td>
          <Button value='Edit' onClick={() => onClick(advert.id)} id={advert.id} />
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
  onClick: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default AdvertsTable;
