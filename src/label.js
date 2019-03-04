import React, { Component } from 'react';

export default class Label extends Component {
    render() {
        const { urls } = this.props;

        return (
            <div className="user-urls">
            { urls.map(({ hash, originalUrl, shortenUrl }) => (
                <div className="user-urls-wrap" key={hash}>
                    {originalUrl} 👉 <a href={shortenUrl} target="_blank" rel="noopener noreferrer">{shortenUrl}</a>
                </div>
            ))}
            </div>
        );
    }
}
