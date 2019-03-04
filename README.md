# url-shortener
Url Shortener based on node.js and React.js

### Requirements
* Mac / Linux
* Node.js, NPM
* MongoDB

### Installation
```sh
   $ mkdir config
   $ cd config
   $ touch db.js
```
db.js:
```sh
module.exports = {
    url: "mongodb://localhost:27017/urlshortener"
};
```
### Run
```sh
    $ npm run dev
    $ npm start
```
