'use strict';

var express = require('express');
var posts = require('./mock/posts.json');

var app = express();

app.get('/', function (req, res) {
    res.send('<h2>This is the root.</h2>');
});

app.get('/blog/:title', function (req, res) {
    var title = req.params.title;
    var post = posts[title];
    res.send(post);
});

app.listen('8080', function() {
    console.log('Frontend server is running at 8080...');
});