const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const isEmpty = require("lodash.isempty");

const signUp = async(req, res) => {
  const { email, password, userType } = req.body;
  try {
    const user =await User.find({ email },'email password userType').exec();
    if (!isEmpty(user)) {
      res.status(200).json({ message: "User Exists!" });
    } else {
      const hash =await bcrypt.hash(password, 10);
      const result = User.create({
        email,
        password: hash,
        userType,
      });
      res.status(201).json({ result, message: "User created successfully!" });
    }
  } catch (error) {
    console.log(error);
    res.status().json({error})
  }
};

const logIn = async(req, res) => {
  const { email, password } = req.body;
  try {
    const user =await User.find({ email }).exec();
    if (!isEmpty(user)) {
      let matchPassword =await bcrypt.compare(password, user[0].password);
      if (matchPassword) {
        const token =await jwt.sign(
          {
            email: email
          },
          process.env.JWT_KEY,
          {
            expiresIn: "1h",
          }
        );

        res.status(200).json({
          message: "Login Successful!",
          token: token,
        });
      } else {
        res.status(400).json({ message: "Please enter the correct password" });
      }
    } else {
      res.status(400).json({ message: "Please Register" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error})
  }
};

module.exports = {
  signUp,
  logIn,
};
