import React, { Component } from 'react';
import Label from './label';
import './form.css';
import validUrl from 'valid-url';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        const localSt = JSON.parse(localStorage.getItem('urls'));
        this.state = {
            value: '',
            urls: localSt ? localSt : [],
            isError: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.isUrl()) {
            this.setState({ isError: true });
            return false;
        }
        this.getShortenUrl();
        this.setState({ value: '', isError: false });
    }

    isUrl() {
        return !!validUrl.isUri(this.state.value);
    }

    getShortenUrl() {
        axios.post('http://localhost:8000', { url: this.state.value })
        .then((response) => {
            console.log(response);
            this.setState(prevState => ({
                urls: [...prevState.urls, response.data]
            }));
            localStorage.setItem('urls', JSON.stringify(this.state.urls));
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        const { value, urls, isError } = this.state;
        const errorMessage = 'Not a URL';

        return (
            <div className="App-header">
                <h1>URL Shortener</h1>
                <form onSubmit={this.handleSubmit} className="shorten-form">
                    <input value={value}
                           onChange={this.handleChange}
                           type="text"
                           placeholder="Paste a link to shorten it"
                           className="shorten-input"
                    />
                    { isError && errorMessage }
                    {!isError && <Label urls={urls} />}
                    <input type="submit" value="Shorten!" className="shorten-button" />
                </form>
            </div>
        );
    }
}

export default Form;
