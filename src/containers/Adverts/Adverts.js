import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './Adverts.css';
import {AdvertsTable, Button, Loader, Sorting, CategoryList} from "../../components";
import { performGetAdverts, performDeleteAdvert } from '../../action_performers/adverts';
import {Link} from "react-router-dom";

class Adverts extends PureComponent {
  constructor(props) {
    super(props);
    this.handleAdvertDelete = this.handleAdvertDelete.bind(this);
    this.goToAdvertEditPage = this.goToAdvertEditPage.bind(this);
    this.goToAdvertPage = this.goToAdvertPage.bind(this);
    this.handleAdvertSort = this.handleAdvertSort.bind(this);
    this.handleFilterByCategory = this.handleFilterByCategory.bind(this);
    this.state = {
      category: '',
      field: 'title',
      direction: 'asc'
    }
  }

  handleFilterByCategory(category) {
    this.setState({category} );
  }

  handleAdvertSort(field, direction) {
    this.setState({field, direction} );
  }

  componentDidMount() {
    performGetAdverts();
  }

  handleAdvertDelete(id) {
    performDeleteAdvert(id);
  }

  goToAdvertEditPage(id) {
    this.props.history.push(`/adverts/${id}/edit`);
  }

  goToAdvertPage(id) {
    this.props.history.push(`/adverts/${id}`);
  }

  render() {
    if (this.props.loading) {
      return <Loader>g</Loader>;
    }

    const {field} = this.state;
    const {direction} = this.state;

    let sortAdverts = (field === 'price') ?
      this.props.adverts.slice().sort(function (a, b) {
        return direction === 'asc' ? (a[field] - b[field]) : (b[field] - a[field])
      }) :
      this.props.adverts.slice().sort(function (a, b) {
        return direction === 'asc' ? a[field].localeCompare(b[field]) :
        b[field].localeCompare(a[field])
      });

    const {category} = this.state;
      if (category !== '') {
        sortAdverts = sortAdverts.filter(function(advert) {
          return advert.category === category;
        });
      }

    return (
      <div className="adverts">
        <Sorting onSelectChange={this.handleAdvertSort}/>
        <CategoryList onSelectChange={this.handleFilterByCategory}/>
        <AdvertsTable adverts={sortAdverts} onDeleteClick={this.handleAdvertDelete}
                      onClick={this.goToAdvertEditPage}
                      onTitleClick={this.goToAdvertPage}
        />
        <Link to="/adverts/new">
          <Button>
            Add Advert
          </Button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filter: state.Adverts.filter,
    adverts: state.Adverts.adverts.data,
    loading: state.Adverts.adverts.loading
  }
};

Adverts.propTypes = {
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Adverts);