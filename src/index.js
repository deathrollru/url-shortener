/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
*/

import Express from 'express';
const app = new Express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/:id', (req, res) => {
    const { id } = req.params;
    res.send('Hello World! Id is' + id);
});

app.post('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
