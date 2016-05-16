'use strict';

var express = require('express');
var posts = require('./mock/posts.json');

var app = express();

app.set('view engine', 'jade'); //defines different settings in express app: set engine to jade for template rendering
app.set('views', __dirname + '/templates'); //set template location, __dirname makes path relative to file, and not node process start location

app.get('/', function (req, res) {
    res.render('index'); // no need for extension, as engine has been set to jade on line 8
});

app.get('/blog/:title?', function (req, res) { // : indicates parameter, ? indicates parameter is optional
    var title = req.params.title; // store title param
    if (title === undefined) { // if empty, send message below
        res.send('This page is under construction.');
    } else { // if not empty, use param to locate post in json and store in variable
        var post = posts[title] || {}; // if post we're looking for does not exist (because param is junk) define it as an empty object
        res.render('post', { post: post }); // render post.jade (1st arg), assign post variable to post property on second arg object -- this allows access to post in template via the post property  
    }
});

app.listen('8080', function() {
    console.log('Frontend server is running at 8080...');
});