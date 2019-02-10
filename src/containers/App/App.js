import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import {PATHS} from "../../constants";
import {Menu, Footer} from "../../components";
import { withRouter } from "react-router-dom";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.goToAdvertsPage = this.goToAdvertsPage.bind(this);
    this.goToAuthorsPage = this.goToAuthorsPage.bind(this);
  }

  goToAdvertsPage() {
    this.props.history.push(PATHS.adverts.path);
  }
  goToAuthorsPage() {
    this.props.history.push(PATHS.authors.path);
  }

  render() {
    return (
      <div>
        <Menu onAdvertsItemClick={this.goToAdvertsPage}
              onAuthorsItemClick={this.goToAuthorsPage}
        />
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    adverts: state.Adverts
  }
};

export default connect(mapStateToProps)(withRouter(App));