var express = require('express');
var cookieParser = require('cookie-parser');
var escape = require('escape-html');
var serialize = require('node-serialize');
const { check } = require('express-validator');


var app = express();

app.use(cookieParser())

app.get('/', function(req, res) {
    if (req.cookies.profile) {
        var str = new Buffer(req.cookies.profile, 'base64').toString();
        var patched = check(str).isString().escape().trim();
        var obj = serialize.unserialize(patched);
        if (obj) {
            res.send("Hello " + escape(obj));
        }
    } else {
        res.cookie('profile', "eyJ1c2VybmFtZSI6ImFqaW4iLCJjb3VudHJ5IjoiaW5kaWEiLCJjaXR5IjoiYmFuZ2Fsb3JlIn0=", {
            maxAge: 900000,
            httpOnly: true
        });

        res.send("Hello stranger");
    }
});

app.listen(3000);