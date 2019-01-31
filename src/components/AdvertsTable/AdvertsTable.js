import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class AdvertsTable extends PureComponent {
    renderRows(adverts) {
        const { onDeleteClick } = this.props;
        return adverts.map(advert => (
            <tr key={advert.id}>
                <td>{advert.title}</td>
                <td>{advert.category}</td>
                <td>{advert.price}</td>
                <td><button onClick={(event) => onDeleteClick(advert.id)}>Delete</button></td>
            </tr>
        ));
    }

    render() {
        const { adverts } = this.props;
        console.log(3, adverts);
        return (
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>{this.renderRows(adverts)}</tbody>
            </table>
        );
    }
}

AdvertsTable.propTypes = {
    adverts: PropTypes.array,
    onDeleteClick: PropTypes.func.isRequired
};

export default AdvertsTable;
