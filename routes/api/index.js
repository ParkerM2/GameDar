const path = require("path");
const router = require("express").Router();
// const searchPage = require("./searchpage");
const userPage = require("./user");

// Book routes
// router.use("/search", searchPage);

// Google Routes
router.use("/user", userPage);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/"));
});

module.exports = router;