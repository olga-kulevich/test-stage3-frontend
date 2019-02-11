import React, {Component} from 'react';
import './Button.css';
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    let {...attrs} = this.props;
    return <button {...attrs}>{this.props.children}</button>
  }
}

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string
};

Button.defaultProps = {
  className: 'button',
  disabled: false
};

export default Button;
