
var router = require("express").Router();
var authCheck = function(req, res, next) {
	if (!req.user) {
		res.redirect("/auth/login");
	} else {
		next();
	}
}

router.get("/", function(req, res) {
	res.render("profile", {user: req.user});
})

module.exports = router;