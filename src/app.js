'use strict';

var express = require('express');
var posts = require('./mock/posts.json');

var app = express();

app.get('/', function (req, res) {
    res.send('<h2>This is the root.</h2>');
});

app.get('/blog', function (req, res) {
    res.send(posts);
});

app.listen('8080', function() {
    console.log('Frontend server is running at 8080...');
});