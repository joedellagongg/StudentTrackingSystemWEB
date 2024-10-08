const student = require("../models/student.model");

exports.addStudent = async function (req, res) {
    const data = req.body;
    try {
        const result = await student.addStudent(data);
        res.json({
            message: "From: [ CONTROLLERS ], Data successfully added",
            data: result,
            // data: req.query,
        });
    } catch (error) {
        res.status(500).json({
            message: "From: [ CONTROLLERS ], Error adding student",
            error: error.message,
        });
    }
};
