const express = require("express");
const router = express.Router();
const accountController = require("../app/controllers/accountController.js");

router.post("/", accountController.register);

module.exports = router;
