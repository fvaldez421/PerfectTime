
// Requiring necessary npm packages
var express = require("express");
var authRoutes = require('./routes/auth-routes');
var profileRoutes = require('./routes/profile-routes');
var bodyParser = require("body-parser");
var session = require("express-session");
var cookieSession = require("cookie-session");
// Requiring passport as we've configured it
var passportSetup = require('./config/passport-setup');
var passport = require("passport");
var keys = require('./config/keys');
// var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 3000;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();

// set up view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
	maxAge: 24*60*60*1000,
	keys: [keys.session.cookieKey]
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
// require("./routes/auth-routes.js")(app);
app.use('/auth', authRoutes);

app.use("/profile", profileRoutes);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
