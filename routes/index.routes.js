const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>
  res.render("index", { userInSession: req.session.currentUser })
);

module.exports = router;
