// var express = require("express");
// var app = express();
var db = require("../models");
var path = require("path");

module.exports = function(app) {
app.post("/api/profile", function(req, res) {
	console.log(req.body);

});

}