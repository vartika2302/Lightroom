const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { createError } = require("../utils/error");


// REGISTER A USER
module.exports.register = async (req, res, next) => {
  const usernameCheck = await User.findOne({ username: req.body.username });
  const emailCheck = await User.findOne({ email: req.body.email });
  if (usernameCheck || emailCheck) {
    return next(createError(409, "Username or email already exists!"));
  } else {
    if (req.body.password === req.body.confirmPassword) {
      try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          username: req.body.username,
          email: req.body.email,
          password: hashedPassword,
          isTeacher: req.body.isTeacher,
        });

        const savedUser = await newUser.save();
        return res.status(201).json(savedUser);
      } catch (err) {
        return next(err);
      }
    } else {
      return next(createError(400, "Passwords don't match!"));
    }
  }
};
