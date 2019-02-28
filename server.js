const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err) => {
    if (err) return console.log(err);
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

    app.listen(port, () => {
        console.log('Example app listening on port ' + port);
    });
});
