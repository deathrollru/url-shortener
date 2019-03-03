import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dbConfig from './config/db';
import { CreateShortUrl, getOriginalUrl } from './controllers/urls';

const app = express();
const port = 8000;

mongoose.connect(dbConfig.url, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', CreateShortUrl);

app.get('/:hash', getOriginalUrl);

app.listen(port, () => {
    console.log('App listening on port ' + port);
});
