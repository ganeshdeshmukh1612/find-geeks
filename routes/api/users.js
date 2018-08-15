// users.js for authentication and authorization

const express = require("express");
const router = express.Router();

// Load User Model to check existing email is used for registration or not?
const User = require("../../models/User");

// @route       GET request to api/users/test
// @description Tests users route
// @access      Public, without login
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

//
// @route       GET request to api/users/register
// @description new registration of user.
// @access      Public, without login first register
router.post("/register", (req, res) => {
  User.findOne({ email: req.body.email });
});

module.exports = router;
