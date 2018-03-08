// var express = require("express");
// var app = express();
var db = require("../models");
var path = require("path");

module.exports = function(app) {
app.post("/api/profile", function(req, res) {
	console.log(req.body);
	db.Member.create({
		name: req.body.name,
		age: req.body.age,
		height: req.body.height,
		weight: req.body.weight,
		gender: req.body.gender,
		conception: req.body.conception
	}).then(function(result) {
		res.redirect(path.join(__dirname, "/members"));
	})
});

}