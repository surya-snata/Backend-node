const mongoose = require("mongoose");

//schema
const userSchema = mongoose.Schema(
  {
    name: String,
    age: Number,
    legal: Boolean,
    city: String,
    language: String,
  },
  { versionKey: false },
  { timestamps: true }
);
//model
const UserModel = mongoose.model("user", userSchema);
module.exports = {
  UserModel,
};
