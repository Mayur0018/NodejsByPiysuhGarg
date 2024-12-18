const mongoose = require("mongoose");
//Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      reuired: true,
      unique: true,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true }
);
 const userModel = mongoose.model("Mayur", userSchema);

 module.exports = userModel;