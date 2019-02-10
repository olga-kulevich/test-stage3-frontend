import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class Menu extends PureComponent {
  render() {
    const {onAdvertsItemClick, onAuthorsItemClick} = this.props;
    return (
      <nav className="header-menu menu">
        <ul className="header-menu__list">
          <li className="header-menu__item" onClick={() => onAdvertsItemClick()}>
            Adverts
          </li>
          <li className="header-menu__item" onClick={() => onAuthorsItemClick()}>
            Authors
          </li>
        </ul>
      </nav>
    )
  }
}

Menu.propTypes = {
  onAdvertsItemClick: PropTypes.func.isRequired,
  onAuthorsItemClick: PropTypes.func.isRequired,
};

export default Menu;