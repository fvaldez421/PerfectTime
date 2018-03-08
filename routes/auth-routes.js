var router = require('express').Router();
var passport = require('passport');
var path = require("path");

// auth login
router.get('/login', function(req, res) {
  res.render('login', {user: req.user});
});

router.get('/logout', function(req,res) {
  req.logout();
  res.redirect("/");
})



// auth with google
router.get('/google', passport.authenticate('google',{
  scope: ['profile']
}));


 (req, res) => {
  // handle with passport
  res.send('logging in with google');
};


router.get('/google/redirect', passport.authenticate('google'), function(req, res) {
  res.redirect("/profile");
});


module.exports = router;
