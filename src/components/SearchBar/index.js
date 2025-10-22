import React, { Component } from 'react';
import api from '../../api';
import AsyncSelect from 'react-select/async';
import {withRouter} from 'react-router-dom'
// import { colourOptions } from '../data';


function filterOptions(response) {
    console.log(response)
    return response.results.map((item)=> {
        return { value: `/movie/${item.id}`, label: item.title }
    })
}

const loadOptions = (inputValue, callback) => {
    api.searchMovie(inputValue).then(response => {
        callback(filterOptions(response))
    })

    // setTimeout(() => {
    //     callback(filterColors(inputValue))
    // }, 1000);
};


class WithCallbacks extends Component {
    state = { inputValue: '' };
    handleInputChange = (newValue) => {
        const inputValue = newValue;
        this.setState({ inputValue });
        return inputValue;
    };

    handleSelectChange = (newValue) => {
        const {history} = this.props
        if (newValue.value) {
            history.push(newValue.value)
        }
    }

    render() {
        return (
            <AsyncSelect
                placeholder="Search movie, titles"
                // components={{ 
                //     DropdownIndicator: (
                //             <i className="fas fa-search"></i>
                //     ) 
                // }}
                name="movie-search"
                onChange={this.handleSelectChange}
                cacheOptions
                loadOptions={loadOptions}
                defaultOptions
                onInputChange={this.handleInputChange}
            />
        );
    }
}

export default withRouter(WithCallbacks)