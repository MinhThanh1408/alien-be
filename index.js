const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const route = require("./src/routes");
const bodyParser = require("body-parser");

const app = express();
const db = require("./src/config/db");

db.connect();
app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ type: 'application/*+json' }))

route(app);

app.listen(3001, () => {
  console.log("Run");
})
