import React, { Component } from 'react';
import api from '../../api';
import AsyncSelect from 'react-select/lib/Async';
import _ from 'lodash'
import {withRouter} from 'react-router-dom'
// import { colourOptions } from '../data';

type State = {
    inputValue: string,
};

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

function filterOptions(response) {
    console.log(response)
    return response.results.map((item)=> {
        return { value: `/movie/${item.id}`, label: item.title }
    })
}

const loadOptions = (inputValue, callback) => {
    _.defer((inputValue)=> {
        return api.searchMovie(inputValue).then(response => {
            return callback(filterOptions(response))
        })
    },1000)

    // setTimeout(() => {
    //     callback(filterColors(inputValue))
    // }, 1000);
};


class WithCallbacks extends Component {
    state = { inputValue: '' };
    handleInputChange = (newValue: string) => {
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