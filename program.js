var express = require('express');
var bodyparser = require('body-parser');

var mongoose= require('mongoose');
var MONGODB_URI = 'mongodb://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOST+':'+process.env.DB_PORT+'/'+process.env.DB;



app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());