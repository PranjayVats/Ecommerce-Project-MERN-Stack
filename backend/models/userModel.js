const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs"); //for encrypting the password
const jwt = require("jsonwebtoken");
const crypto = require("crypto"); //It is a built in module hence no need to install

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxlength: [30, "Name cannot exceed 30 characters"],
    minlength: [4, "Name should have atleast 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter A Valid Email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minlength: [8, "Password should have atleast than 8 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

// This is for encrypting the password when user is created
// or when password is updated
userSchema.pre("save", async function (next) {
  //This condition is for checking that is the password modified or not
  // If password is not modified then the password should not be encrypted
  // As it is already encypted
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  //here 10 can be understand as the power
});

//JWT TOKEN
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  //here id is payload
};

//Compare Password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//Generating Password Reset Token
userSchema.methods.getResetPasswordToken = function () {
  //Generating Token
  const resetToken = crypto.randomBytes(20).toString("hex");

  //Hashing and adding to user schema
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  //'sha256' is an encryption algorithm

  this.resetPasswordExpire = Date.now() + 25 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model("User", userSchema);
