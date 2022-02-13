const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// @desc Register new user
// @route POST api/users
// @access Public
const registerUser = async (req, res) => {
  res.json({ message: "User Registered" });
  const { username, email, password } = req.body;
  if (!username || 1) {
  }
};

// @desc Login user
// @route POST api/users/login
// @access Public
const loginUser = async (req, res) => {
  res.json({ message: "Login Registered" });
};

// @desc Get user data
// @route POST api/users/me
// @access Private
const getMe = async (req, res) => {
  res.json({ message: "User data display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
