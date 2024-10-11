const student = require("../models/student.model");

exports.getStudent = async function (req, res) {
    try {
        const students = await student.getStudents();
        res.json(students);
    } catch (error) {
        res.status(500).json({
            error: "From: [ CONTROLLERS ], Failed to retrieve students",
        });
    }
};

exports.addStudent = async function (req, res) {
    const data = req.body;
    try {
        const result = await student.addStudent(data);
        res.status(200).json({
            message: "From: [ CONTROLLERS ], Data successfully added",
            authenticated: true,
        });
    } catch (error) {
        res.status(500).json({
            message: "From: [ CONTROLLERS ], Error adding student",
            error: error.message,
        });
    }
};
