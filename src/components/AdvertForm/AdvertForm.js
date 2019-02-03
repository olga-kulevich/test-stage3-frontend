import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class AdvertForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { title: '', category: '', price: ''};
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handlePriceChange = this.handlePriceChange.bind(this);
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handleCategoryChange(event) {
        this.setState({category: event.target.value});
    }

    handlePriceChange(event) {
        this.setState({price: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        const { onAddAdvert } = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title
                    <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
                </label>

                <label>
                    Category
                    <input type="text" value={this.state.category} onChange={this.handleCategoryChange}/>
                </label>

                <label>
                    Price
                    <input type="number" value={this.state.price} onChange={this.handlePriceChange}/>
                </label>

                <button onClick={() => onAddAdvert(this.state)}>AddAdvert</button>
            </form>
        );
    }
}

AdvertForm.propTypes = {
    onAddAdvert: PropTypes.func.isRequired
};

export default AdvertForm;