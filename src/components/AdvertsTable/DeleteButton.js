import React, {Component} from 'react';

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: props.loading};
  }

  onClick = () => {
    this.props.onDeleteClick(this.props.id);
    this.setState({loading: true});
  };

  render() {
    return <button disabled={this.state.loading} onClick={this.onClick}>Delete</button>
  }
}

DeleteButton.defaultProps = {
  loading: false
};

export default DeleteButton;