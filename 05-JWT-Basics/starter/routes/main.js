const express = require("express");
const router = express.Router();
const { login, dashboard } = require("../controllers/main");
const {loginMiddlware, authorizationMiddleware} = require('../middleware/auth')


router.route("/dashboard").get(authorizationMiddleware,dashboard);
router.route("/login").post(loginMiddlware,login);

module.exports = router