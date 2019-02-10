import React, {Component} from 'react';
import './ButtonDelete.css';

class ButtonDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: props.loading};
  }

  onClick = () => {
    this.props.onDeleteClick(this.props.id);
    this.setState({loading: true});
  };

  render() {
    return <button className= 'button' disabled={this.state.loading} onClick={this.onClick}>Delete</button>
  }
}

ButtonDelete.defaultProps = {
  loading: false
};

export default ButtonDelete;