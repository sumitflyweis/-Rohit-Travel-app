var bcrypt = require("bcrypt");
const path = require("path");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const userSchema = require("../../model/CustomerAccount");
const newOTP = require("otp-generator");
const SECRET = "demo@1234";

exports.loginProfileAdmin = async (req, res) => {
  try {
    const userexists = await userSchema.findOne({ phone: req.body.phone });
    // console.log(userexists);
    if (!userexists || userexists.length == 0) {
      const otpGen = newOTP.generate(4, {
        alphabets: false,
        upperCase: false,
        specialChar: false,
      });
      // console.log(otpGen);
      const data = {
        otp: otpGen,
        phone: req.body.phone,
      };
      //console.log(data);
      const createUser = await userSchema.create(data);
      console.log(createUser);
      const token = jwt.sign(
        { _id: createUser._id },
        process.env.SECRET || SECRET,
        { expiresIn: "3d" }
      );
      res.setHeader("x-api-key", token);
      return res.status(200).json({
        createUser: createUser,
        message: "OTP sent successfully",
        Token: token,
        message: "token generated",
        _id: createUser._id,
      });
    } else {
      const otpGen = newOTP.generate(4, {
        alphabets: false,
        upperCase: false,
        specialChar: false,
      });
      userexists.otp = otpGen;
      const updatedUser = await userexists.save();

      console.log(updatedUser);

      await userexists.save();
      const token = jwt.sign(
        { userId: userexists._id },
        process.env.SECRET || SECRET,
        { expiresIn: "3d" }
      );
      res.setHeader("x-api-key", token);
      return res.status(200).json({
        otp: otpGen,
        message: "OTP sent successfully",
        Token: token,
        message: "token generated",
        userId: userexists._id,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

exports.userProfileAdmin = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    };
    const userexists = await userSchema.findOne({ email: data.email });

    if (!userexists || userexists.length == 0) {
      const userexists1 = await userSchema.findOne({ phone: data.phone });

      if (!userexists1 || userexists1.length == 0) {
        if (!req.body.password == req.body.confirmPassword) {
          res.status(500).json({
            message: "Password Not Match  ",
          });
        } else {
          const create = await userSchema.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: bcrypt.hashSync(req.body.password, 8),
            confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 8),
          });
          return res.status(200).json({
            msg: "registred successfully",
            create: create,
          });
        }
      } else {
        return res.status(200).json({ msg: "phone already exists" });
      }
    } else {
      return res.status(200).json({ msg: "email already exists" });
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.customerUpdateAdmin = async (req, res) => {
  try {
    const UpdatedData = await userSchema
      .findOneAndUpdate(
        { _id: req.params.id },
        {
          name: req.body.name,
          email: req.body.email,
        }
      )
      .exec();
    console.log(UpdatedData);
  return   res.status(200).send({
      message: "user Profile Updated ",
      data: UpdatedData,
    });
  } catch (err) {
    console.log(err);
  return  res.status(400).send({ message: err.message });
  }
};

exports.AllUsersAdmin = async (req, res) => {
  try {
    const Allusers = await userSchema.find();
    res.status(200).json({
      Users: Allusers,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getUserByIdAdmin = async (req, res) => {
    try {
      const user = await userSchema.findById({_id: req.params.id});
      console.log(user);
      if(!user) {
        return res.status(404).send({ message: "User not found"})
      }else{
     return res.status(200).json({
        User: user
      });
    }
    } catch (err) {
      console.log(err);
      res.status(400).json({
        message: err.message,
      });
    }
  };


exports.deleteUserAdmin = async (req, res) => {
    try {
      const id = req.params.id;
      await userSchema.deleteOne({ _id: id });
     return  res.status(200).send({ message: "data deleted " });
    } catch (err) {
      console.log(err);
      res.status(400).send({ message: err.message });
    }
  };
