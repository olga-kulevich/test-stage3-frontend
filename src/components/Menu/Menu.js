import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import { withRouter } from "react-router-dom";

class Menu extends PureComponent {
  render() {
    const path = this.props.location.pathname;
    let classNameAdverts = "header-menu__item";
    let classNameAuthors = classNameAdverts;
    if (path.startsWith('/advert')) {
      classNameAdverts += ' header-menu__item__active';
    } else if (path.startsWith('/author')) {
      classNameAuthors += ' header-menu__item__active';
    }

    const {onAdvertsItemClick, onAuthorsItemClick} = this.props;
    return (
      <nav className="header-menu menu">
        <ul className="header-menu__list">
          <li className={classNameAdverts} onClick={() => onAdvertsItemClick()}>
            Adverts
          </li>
          <li className={classNameAuthors} onClick={() => onAuthorsItemClick()}>
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

export default withRouter(Menu);
