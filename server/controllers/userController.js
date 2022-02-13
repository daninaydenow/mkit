const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

// @desc Register new user
// @route POST api/users
// @access Public
const registerUser = async (req, res) => {
 
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields!");
  }

  // check if user exists
  const userExists = await User.findOne({email});
  if(userExists) {
    res.status(400)
    throw new Error('User already exist');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user 
  const user = await User.create({
  username, 
  email, 
  password: hashedPassword
  })

  if(user) {
    res.status(201).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error("Invalid user data!")
  }
 
};

// @desc Login user
// @route POST api/users/login
// @access Public
const loginUser = async (req, res) => {
  const {email, password} = req.body;
  // Check for user email
  const user = await User.findOne({email});
   if (user && (await bcrypt.compare(password, user.password))) {
     res.json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: generateToken(user._id)
     })
   } else {
    res.status(400)
    throw new Error("Invalid credentials!")
   }
};

// @desc Get user data
// @route POST api/users/me
// @access Private
const getMe = async (req, res) => {
  res.json({ message: "User data display" });
};

// Generate JWT
const generateToken = (id) => {
   return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "30m"});
}

module.exports = {
  registerUser,
  loginUser,
  getMe,
};