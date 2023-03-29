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
    res.json({
      Login: "handleLogin",
    });
  }

  handleValidator(req, res) {
    res.json({
      Validator: "handleValidator",
    });
  }
}

module.exports = new AccountController();
