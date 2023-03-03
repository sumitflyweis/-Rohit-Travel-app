var bcrypt = require("bcryptjs");
const path = require("path");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const vendorSchema = require("../../model/vendorAccount");
const newOTP = require("otp-generator");

const SECRET = "demo@1234";

exports.VendorloginProfile = async (req, res) => {
  try {
    const vendorexists = await vendorSchema.findOne({email: req.body.email});
    console.log(vendorexists);
    if (!vendorexists || vendorexists.length == 0) 
      return res.status(404).send({msg:"vendor not found"})

    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      vendorexists.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({
        message: "Wrong password",
      });

    }else{
      const token = jwt.sign(
        { userId: vendorexists._id },
        process.env.SECRET || SECRET,
        { expiresIn: "3d" }
      );
      res.setHeader("x-api-key", token);
      return res.status(200).json({
      //  otp: otpGen,
      //  message: "OTP sent successfully",
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
          phone: req.body.phone,
          password: req.body.password,
          confirmPassword: req.body.confirmPassword,
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


exports.VendorgetbyId = async (req, res) => {
  try {
    const getvendor = await vendorSchema.findById({_id:req.params.id});
    if(!getvendor || getvendor.length == 0) {
      return res.status(404).send({ message: "no data found" });
    }else{
  return  res.status(200).json({
      data: getvendor,
    });
  }
 } catch (err) {
    console.log(err);
  return  res.status(400).json({
      message: err.message,
    });
  }
};



exports.deleteVendor = async (req, res) => {
  try {
    const id = req.params.id;
    await vendorSchema.deleteOne({ _id: id });
  return  res.status(200).send({ message: "data deleted " });
  } catch (err) {
    console.log(err);
  return  res.status(400).send({ message: err.message });
  }
};

