var bcrypt = require("bcrypt");
const path = require("path");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const vendorSchema = require("../../model/vendorAccount");
const newOTP = require("otp-generator");

const SECRET = "demo@1234";

exports.VendorloginProfile = async (req, res) => {
  try {
    const vendorexists = await vendorSchema.findOne({ phone: req.body.phone });
    console.log(vendorexists);

    if (!vendorexists || vendorexists.length == 0) {
      const otpGen = newOTP.generate(4, {
        alphabets: false,
        upperCase: false,
        specialChar: false,
      });

      const data = {
        otp: otpGen,
        phone: req.body.phone,
      };
      const createVendor = await vendorSchema.create(data);
      console.log(createVendor);
      const token = jwt.sign(
        { _id: createVendor._id },
        process.env.SECRET || SECRET,
        { expiresIn: "3d" }
      );
      res.setHeader("x-api-key", token);
      return res.status(200).json({
        createVendor: createVendor,
        message: "OTP sent successfully",
        Token: token,
        message: "token generated",
        _id: createVendor._id,
      });
    } else {
      const otpGen = newOTP.generate(4, {
        alphabets: false,
        upperCase: false,
        specialChar: false,
      });
      vendorexists.otp = otpGen;
      const updatedVendor = await vendorexists.save();

      console.log(updatedVendor);

      await vendorexists.save();
      const token = jwt.sign(
        { userId: vendorexists._id },
        process.env.SECRET || SECRET,
        { expiresIn: "3d" }
      );
      res.setHeader("x-api-key", token);
      return res.status(200).json({
        otp: otpGen,
        message: "OTP sent successfully",
        Token: token,
        message: "token generated",
        VendorId: vendorexists._id,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "internal server error" });
  }
};

exports.VendorProfile = async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    };
    const vendorexists = await vendorSchema.findOne({ email: data.email });

    if (!vendorexists || vendorexists.length == 0) {
      const vendorexists1 = await vendorSchema.findOne({ phone: data.phone });

      if (!vendorexists1 || vendorexists1.length == 0) {
        if (!req.body.password == req.body.confirmPassword) {
          return res.status(500).json({
            message: "Password Not Match  ",
          });
        } else {
          const create = await vendorSchema.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: bcrypt.hashSync(req.body.password, 8),
            confirmPassword: bcrypt.hashSync(req.body.confirmPassword, 8),
          });
          return res.status(200).json({
            msg: "registred successfully",
            create: create,
          })
        }
      } else {
        return res.status(200).json({ msg: "phone already exists" })
      }
    } else {
      return res.status(200).json({ msg: "email already exists" })
    }
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.VendorUpdate = async (req, res) => {
  try {
    const UpdatedData = await vendorSchema
      .findOneAndUpdate(
        { _id: req.params.id },
        {
          name: req.body.name,
          email: req.body.email,
        }
      )
      .exec();
    console.log(UpdatedData);
    res.status(200).send({
      message: "user Profile Updated ",
      data: UpdatedData,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.VendorAllUsers = async (req, res) => {
  try {
    const Allusers = await vendorSchema.find();
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
