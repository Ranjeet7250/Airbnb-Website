const express = require("express");
const router = express.Router();
const wrapAsync = require("../utlis/wrapAsync.js");
const passport = require("passport");
const { saveRedireactUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup)
);

router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedireactUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), 
userController.login)

router.get("/logout",userController.logout);

module.exports = router;