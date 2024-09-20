const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const database = require("../config/db");

exports.login = async (req, res) => {
    const { username, password } = req.body;

    const query = `SELECT * FROM users WHERE username = ?`;

    database.query(query, [username], (err, results) => {
        if (err) return res.status(500).send("Error on the server.");
        if (!results.length) return res.status(404).send("No user found.");

        const user = results[0];

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid)
            return res.status(401).send({ auth: false, token: null });

        const token = jwt.sign({ id: user.id }, "secret-key", {
            expiresIn: 86400,
        });
        res.status(200).send({ auth: true, token });
    });
};


// import { NextResponse } from "next/server";

// import { redirect } from "next/navigation";

// export const login = async (formData: FormData) => {
//     console.log("GET REQUEST");
//     const user = formData.get("user");
//     const pass = formData.get("pass");

//     const admin_user = "123";
//     const admin_pass = "12345";

//     const student_user = "121212";
//     const student_pass = "121212";


//     if (admin_user === user && admin_pass === pass) {
//         console.log("True");
//         redirect("/dashboard");
//     } else if (student_user === user && student_pass === pass) {
//         console.log("True Student Dashboard");
//         redirect("/administrator");
//     } else {
//         console.log("Error");
//     }

//     return NextResponse.json({ response: "Excellent Connection", status: 201 });
// };
