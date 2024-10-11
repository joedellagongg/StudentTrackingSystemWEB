const jwt = require("jsonwebtoken");
const database = require("../config/db");

const authModel = require("../models/auth.model");
const studentModel = require("../models/student.model");

exports.authentication = async function (req, res) {
    const { username, password } = req.body;
    // console.log(username, password);
    const data = req.body;

    try {
        const response = await authModel.authLogin(data);
        res.status(200).json({
            message:
                "From: [ LOGIN == CONTROLLERS ], Login added to authentication",
            authenticated: true,
        });
    } catch (err) {
        res.status(500).json({
            message: "From: [ LOGIN == CONTROLLERS ], Error login",
        });
    }

    // const response = await authModel.authLogin();
    // const res = await studentModel
};

// KEEP FOR JWT Authentication.
// ADD COOKIES

// let jwtSecretKey = "super-idol-basic-lang-ang-api-huhuhuhuhuhuhuhu";
// let data = {
//     time: Date(),
//     userId: 12,
// };

// const token = jwt.sign(data, jwtSecretKey);

// console.log(token);
