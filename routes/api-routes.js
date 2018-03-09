// var express = require("express");
// var app = express();
var db = require("../models");
var path = require("path");
// var google = require("./profile-routes");

module.exports = function(app) {

app.put("/api/profile", function(req, res) {
	// console.log("should be an object: " + req.body);
	console.log("should be the id: " + req.body.googleId);
	console.log("should be my name: " + req.body.nickName)
	// console.log("this should be a name: " + google.user.name);
	db.User.update({
		nickName: req.body.nickName,
		age: req.body.age,
		height: req.body.height,
		weight: req.body.weight,
		gender: req.body.gender,
		conception: req.body.conception
	}, {
		where: {
			googleId: req.body.googleId
		}
	})
	res.redirect(path.join(__dirname, "/members"));

});


app.post("/api/daily", function(req, res) {
	console.log(req.body);
	db.Daily.create({
		date: req.body.date,
		bbt: req.body.bbt,
		mood: req.body.mood,
		energy: req.body.energy,
		symptoms: req.body.symptoms,
		cervMuc: req.body.cervMuc,
		intercourse: req.body.intercourse,
		conceptMeth: req.body.conceptMeth,
		meds: req.body.meds,
		supplements: req.body.supplements
	}).then(function(result) {
		res.redirect(path.join(__dirname, "/charts"));
	})
});

app.post("/api/general", function(req, res) {
	console.log(req.body);
	db.General.create({
		fdLastPeriod: req.body.fdLastPeriod,
		cycleLength: req.body.cycleLength
	}).then(function(result) {
		res.redirect(path.join(__dirname, "/charts"));
	})
});

}