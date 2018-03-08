var express = require("express");
var app = express();
var db = require("../models");


app.post("/api/profile", function(req, res) {
	console.log(req.body);

});

