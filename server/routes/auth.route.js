const express = require("express");
const router = express.Router();

const authControllers = require("../controllers/auth.controller");

// router.post("/development", (req, res) => res.json{}, studentController.addStudent);

router.post("/", authControllers.authentication);

module.exports = router;
