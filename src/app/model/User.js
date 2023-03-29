import mongoose from "mongoose";
const { Schema } = mongoose;

const User = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", User);
