import React, {PureComponent} from 'react';
import {Button} from "../../components";
import PropTypes from "prop-types";

class SearchBar extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChanging = this.handleChanging.bind(this);
    this.state = {
      keyWord: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const {onSubmit} = this.props;
    if (typeof (onSubmit) === 'function') {
      onSubmit(this.state.keyWord);
    }
  }

  handleChanging(event) {
    const target = event.target;
    const value = target.value;
    this.setState({keyWord: value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChanging} name="find" value={this.state.keyWord}/>
        <Button> Find </Button>
      </form>
    )
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;