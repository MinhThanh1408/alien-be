const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/AlienDB");
    console.log("Connected to Alien_DB");
  } catch (err) {
    console.log("Can't connect to Alien_DB");
  }
}
module.exports = { connect };
