var bcrypt = require("bcryptjs");
const path = require("path");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const userSchema = require("../../model/CustomerAccount");
const newOTP = require("otp-generator");

const SECRET = "demo@1234";

exports.userProfile1 = async (req, res) => {
  try {
    // const data = {
    //   name: req.body.name,
    //   email: req.body.email,
    //   phone: req.body.phone,
    //   password: req.body.password,
    //   confirmPassword: req.body.confirmPassword,
    //   profileImage: req.body.profileImage
    // };
    // const userexists = await userSchema.findOne({ email: data.email });

    // if (!userexists || userexists.length == 0) {
    //   const userexists1 = await userSchema.findOne({ phone: data.phone });

    //   if (!userexists1 || userexists1.length == 0) {
    //     if (!req.body.password == req.body.confirmPassword) {
    //       return res.status(500).json({
    //         message: "Password Not Match  ",
    //       });
    //     } else {
    //       const create = await userSchema.create({
    //         name: req.body.name,
    //         email: req.body.email,
    //         phone: req.body.phone,
    //         // password: bcrypt.hashSync(req.body.password, 8),
    //         // confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 8),
    //         profileImage : req.body.profileImage
    //       });
    //       return res.status(200).json({
    //         msg: "registred successfully",
    //         create: create,
    //       });
    //     }
    //   } else {
    //     return res.status(200).json({ msg: "phone already exists" });
    //   }
    // } else {
    //   return res.status(200).json({ msg: "email already exists" });
    // }
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ msg: "phoneNumber is  required" });
    }

    const phoneNumber = await userSchema.findOne({ phone: phone });
    if (phoneNumber) {
      return res.status(400).json({ msg: "phone number already exist" });
    }

    const otp = Math.floor(Math.random() * 10000 + 1);
    console.log(otp);
    const user = await userSchema.create({
      phone: phone,
      otp: otp,
      name: req.body.name,
      email: req.body.email,
      profileImage: req.body.profileImage,
      password: bcrypt.hashSync(req.body.password, 8),
      confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 8),
    });
    console.log(user);
    console.log(user._id.toString());
    // const createWallet = await Wallet.create({ user: user._id.toString() });
    // console.log(createWallet);
    if (user) {
      return res
        .status(200)
        .json({ msg: "otp has been sent to your number", otp: otp });
    } else {
      return res.status(400).json({ msg: "Something went wrong, try again" });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

module.exports.verifySignIn = async (req, res) => {
  try {
    const { otp } = req.body;
    const verifyOtp = await userSchema.findOne({
      otp: otp,
    });
    if (!verifyOtp || verifyOtp.length == 0) {
      return res.status(400).json({ msg: "invalid otp" });
    } else {
      const data = { _id: verifyOtp._id, phone: verifyOtp.phone };

      const token = jwt.sign(
        { _id: verifyOtp._id },
        /* process.env.KEY*/ SECRET,
        {
          expiresIn: "1d",
        }
      );
      console.log(token);
      res.setHeader("x-api-key", /* "Bearer "*/ +token);
      return res
        .status(200)
        .json({ msg: "signIn successfull", data: data, Token: token });
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message, name: error.name });
  }
};

exports.customerUpdate1 = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      profileImage: req.body.profileImage,
      password: bcrypt.hashSync(req.body.password, 8),
    };
    const userId = req.token._id;
    console.log(userId);
    const user = await userSchema.findByIdAndUpdate({ _id: userId }, data, {
      new: true,
    });
    // console.log(user);
    return res.status(200).json({ msg: "profile details updated", user: user });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err.message,
    });
  }
};

exports.loginProfile1 = async (req, res) => {
  try {
    const userexists = await userSchema.findOne({
      phone: req.body.phone,
    });
    console.log(userexists);
    //console.log(userexists.otp)

    if (!userexists || userexists.length == 0) {
      return res.status(400).json({ msg: "user does not exist" });
    }

    // const ispasswordValid = bcrypt.compareSync(
    //   req.body.password,
    //   userexists.password
    // );
    // console.log(ispasswordValid);

    // if (!ispasswordValid) {
    //   return res.status(501).json({
    //     message: "Wrong Password",
    //   });
    // }
    if (userexists.phone != req.body.phone) {
      return res.status(400).json({
        message: "phoneNumber Not Match  ",
      });
    }

    // const token = jwt.sign({ _id: userexists._id }, SECRET, {
    //   expiresIn: "15d",
    // });

    // console.log(token);
    // res.setHeader("x-api-key", /* "Bearer "*/ +token);
    return res.status(200).json({
      msg: "login successfull",
      otp: userexists.otp,
      //  Token: token,
      _id: userexists._id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

exports.socialLogin = async (req, res) => {
  try {
    const { google_id, name, email } = req.body;

    const user = await userSchema.findOne({ google_id: google_id });
    console.log(user);
    if (!user || user.length === 0) {
      const data1 = {
        google_id: req.body.google_id,
        name: req.body.name,
        email: req.body.email,
        profileImage: req.body.profileImage,
      };
      console.log();
      const create = await userSchema.create(data1);

      const accessToken1 = jwt.sign({ id: create._id }, process.env.KEY, {
        expiresIn: "1d",
      });

      res.setHeader("x-api-key", /* "Bearer "*/ +accessToken1);
      return res.status(200).send({
        message: "logged in successfully",
        accessToken: accessToken1,
        data: create,
      });
    }

    const accessToken = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "1d",
    });

    res.setHeader("x-api-key", /* "Bearer "*/ +accessToken);
    return res.status(200).send({
      message: "logged in successfully",
      accessToken: accessToken,
      data: user,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send({ error: "internal server error" + err.message });
  }
};


exports.getUserById = async (req, res) => {
  try {
    const user = await userSchema.findOne({ _id: req.params.id });
    return res.status(200).json({
      User: user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err.message,
    });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await userSchema.deleteOne({ _id: id });
    return res.status(200).send({ message: "data deleted " });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

exports.customerUpdatePassword = async (req, res) => {
  try {
    const UpdatedData = await userSchema
      .findOneAndUpdate(
        { _id: req.params.id },
        {
          password: bcrypt.hashSync(req.body.password, 8),
          // confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 8),
        }
      )
      .select({ password: 1 /*confirmPassword: 1 */ })
      .exec();
    console.log(UpdatedData);
    return res.status(200).send({
      message: "user Profile Updated ",
      data: UpdatedData,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};
