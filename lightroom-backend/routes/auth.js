const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/authCtrl");

router.post("/register", authCtrl.register);

module.exports = router;
