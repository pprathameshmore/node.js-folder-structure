const express = require("express");
const users = express.Router();

const { getAllUsers } = require("../../controllers/users");

users.route("/").get(getAllUsers);

module.exports = users;
