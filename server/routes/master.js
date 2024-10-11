const express = require("express");
const router = express.Router();
const cors = require("cors");

const main = require("./main.route");
const loginRoute = require("./auth.route");
const studentRoute = require("./student.route");
const sectionRoute = require("./section.route");

const corsSetting = {
    credentials: true,
    origin: "http://localhost:3000",
};

const registeredRoute = (app) => {
    app.use(cors(corsSetting));
    app.use("/", main);
    app.use("/login", loginRoute);
    app.use("/add_student", studentRoute);
    app.use("/student_list", studentRoute);
    app.use("/add_section", sectionRoute);
};

module.exports = registeredRoute;
