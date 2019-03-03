import React, { Component } from 'react';
import './form.css';
import validUrl from 'valid-url';
import axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
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
            console.log('Not a URL');
            return false;
        }
        this.test();
    }

    isUrl() {
        return !!validUrl.isUri(this.state.value);
    }

    test() {
        axios.post('http://localhost:8000/', { url: this.state.value })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="App-header">
                <h1>URL Shortener</h1>
                <form onSubmit={this.handleSubmit} className="shorten-form">
                    <input value={this.state.value}
                           onChange={this.handleChange}
                           type="text"
                           placeholder="Paste a link to shorten it"
                           className="shorten-input"
                    />
                    <input type="submit" value="Shorten!" className="shorten-button" />
                </form>
            </div>
        );
    }
}

export default Form;
