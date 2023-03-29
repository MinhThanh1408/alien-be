const Account = require("../model/Account");
class AccountController {
  register(req, res) {
    const data = req.body.data;
    Account.findOne({ username: data.username })
      .then((account) => {
        if (account) {
          res.status(400).send("User already exists");
        } else {
          const account = new Account(data);
          account.save();
          res.send("OK");
        }
      })

      .catch((err) => {
        console.log("Server error");
      });
  }
  login(req, res) {
    const data = req.body.data;
    Account.findOne({ username: data.username, password: data.password })
      .then((account) => {
        if (account) {
          res.status(200).send(true);
        } else {
          res.status(400).send(false);
        }
      })

      .catch((err) => {
        console.log("Server error");
      });
  }

  handleValidator(req, res) {
    res.json({
      Validator: "handleValidator",
    });
  }
}

module.exports = new AccountController();
