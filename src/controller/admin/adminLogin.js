var bcrypt = require("bcryptjs");
const path = require("path");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const adminSchema = require("../../model/adminLogin");
//const newOTP = require("otp-generator");
const SECRET = "demo@1234";

exports.AdminLogin = async (req, res) => {
   const Password = req.body.password
  const adminData = await adminSchema.findOne({ email: req.body.email });
  console.log(adminData);
  if (!adminData || adminData.length == 0) {
    return res.status(500).json({
      message: "this email with  is not Admin ",
    });
  }

  if (!Password || Password.length == 0) {
    return res.status(500).json({
      message: "password not given ",
    });
  }
 const passwordIsValid = bcrypt.compareSync(
    Password,
    adminData.password
  );
  console.log(passwordIsValid);

  if (!passwordIsValid) {
    return res.status(500).json({
      message: "Password Not Match  ",
    });
  }
  const token = jwt.sign({ id: adminData._id }, process.env.SECRET || SECRET);

  return res.status(200).json({
    accessToken: token,
  });
};

exports.adminProfile1 = async (req, res) => {
  try {
    const data = {
      email: req.body.email,
      password: req.body.password,
    };
    const adminExists = await adminSchema.findOne({
      email: data.email,
    });

    if (adminExists) {
      return res.status(500).json({
        message: "Email  already exist",
      });
    } else {
      const create = await adminSchema.create({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
      });
      return res.status(200).json({
        msg: "registred successfully",
        create: create,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: err.message });
  }
};

exports.AdminUpdate = async (req, res) => {
  try {
    const UpdatedData = await adminSchema
      .findOneAndUpdate(
        { _id: req.params.id },
        {
          password: bcrypt.hashSync(req.body.password, 8),
          email: req.body.email,
        }
      )
      .exec();
    console.log(UpdatedData);
    res.status(200).send({
      message: "Admin Profile Updated ",
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err.message });
  }
};

exports.deleteAdmin = async (req, res) => {
    try {
      const admin = await adminSchema.findByIdAndDelete(req.params.id);
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }
    
      return res.status(200).json({ message: "Admin deleted" });
    } catch (err) {
      console.log(err.message);
      return res.status(500).json({
        message: "server error while deleting admin",
        error: err.message,
      });
    }
  };