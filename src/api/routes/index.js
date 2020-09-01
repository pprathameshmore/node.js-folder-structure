const express = require("express");
const router = express.Router();

const usersRouter = require("./modules/users");

router.use("/v1/users", usersRouter);

module.exports = router;
