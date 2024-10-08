const express = require("express");
const router = express.Router();

const studentController = require("../controllers/student.controllers");

// router.post("/development", (req, res) => res.json{}, studentController.addStudent);

router.post("/", studentController.addStudent);

module.exports = router;
