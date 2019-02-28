import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './Adverts.css';
import {AdvertsTable, Button, Loader, Sorting, CategoryList, SearchBar} from "../../components";
import { performGetAdverts, performDeleteAdvert } from '../../action_performers/adverts';
import {Link} from "react-router-dom";

class Adverts extends PureComponent {
  constructor(props) {
    super(props);
    this.handleAdvertDelete = this.handleAdvertDelete.bind(this);
    this.goToAdvertEditPage = this.goToAdvertEditPage.bind(this);
    this.goToAdvertPage = this.goToAdvertPage.bind(this);
    this.handleAdvertSort = this.handleAdvertSort.bind(this);
    this.handleAdvertFind = this.handleAdvertFind.bind(this);

    this.state = {
      category: '',
      field: 'title',
      direction: 'asc',
      keyWord: ''
    }
  }

  handleAdvertFind(keyWord) {
    this.setState({keyWord} );
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

    const {field, direction, category, keyWord} = this.state;

    let sortAdverts = (field === 'price') ?
      this.props.adverts.slice().sort(function (a, b) {
        return direction === 'asc' ? (a[field] - b[field]) : (b[field] - a[field])
      }) :
      this.props.adverts.slice().sort(function (a, b) {
        return direction === 'asc' ? a[field].localeCompare(b[field]) :
        b[field].localeCompare(a[field])
      });

      if (category !== '') {
        sortAdverts = sortAdverts.filter(function(advert) {
          return advert.category === category;
        });
      }

      if (keyWord !== '') {
        sortAdverts = sortAdverts.filter(function(advert) {
          return (advert.title.indexOf(keyWord) !== -1) || (advert.description.indexOf(keyWord) !== -1);
        });
      }

    return (
      <div className="adverts">
        <SearchBar onSubmit={this.handleAdvertFind}/>
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