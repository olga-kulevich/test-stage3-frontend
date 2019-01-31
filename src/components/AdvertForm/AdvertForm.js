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
        console.log(event.target.value);
        this.setState({title: event.target.value});
    }

    handleCategoryChange(event) {
        console.log(event.target.value);
        this.setState({category: event.target.value});
    }

    handlePriceChange(event) {
        console.log(event.target.value);
        this.setState({price: event.target.value});
    }

    render() {
        const { onAddAdvert } = this.props;

        return (
            <form>
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

                <button onClick={(event) => onAddAdvert(this.state)}>AddAdvert</button>
            </form>
        );
    }
}


AdvertForm.propTypes = {
    onAddAdvert: PropTypes.func.isRequired
};

export default AdvertForm;