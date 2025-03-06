const path = require('path');
const express = require('express');

const configViewEngine = (app) => {
    // configure the view engine
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'ejs');

    // configure the static files
    app.use(express.static(path.join('./src', 'public')));
};

module.exports = configViewEngine; // export the function configViewEngine