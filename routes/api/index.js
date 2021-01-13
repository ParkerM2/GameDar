const path = require("path");
const router = require("express").Router();
// const searchPage = require("./searchpage");
const userPage = require("./user");



// Routes
router.use("/user", userPage);

module.exports = router;