const express = require("express");
const router = express.Router();

const studentController = require("../controllers/student.controllers");

router.get("/", studentController.getStudent);
// router.post("/", studentController.addStudent);

module.exports = router;
