import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Menu extends PureComponent {
  render() {
    const {onAdvertsItemClick, onAuthorsItemClick} = this.props;
    return (
    <div>
      <ul>
        <li onClick={() => onAdvertsItemClick()}>
          Adverts
        </li>
        <li onClick={() => onAuthorsItemClick()}>
          Authors
        </li>
      </ul>
    </div>
    )
  }
}

Menu.propTypes = {
  onAdvertsItemClick: PropTypes.func.isRequired,
  onAuthorsItemClick: PropTypes.func.isRequired,
};

export default Menu;