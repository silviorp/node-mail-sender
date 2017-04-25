const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

module.exports = () => {
    const app = express();

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(expressValidator());

    consign({cwd: 'src'})
        .include('controllers')
        .then('repository')
        // .then('services')
        .into(app);

    return app;
}
