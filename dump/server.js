const express = require("express");
const database = require("./config/db");
const routes = require("./routes/master");
const cors = require("cors");
const app = express();
const port = 5500;

// app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
routes(app);

// const user = "123123";
// const pass = "123456";

// app.post("/login", (req, res) => {
//     const { username, password } = req.body;

//     // console.log("Credentials", username, password);

//     if (user === username && pass === password) {
//         res.status(200).json({ authenticated: true });
//     } else {
//         res.status(401).json({ authenticated: false });
//     }
// });

// app.post("/development", (req, res) => {
//     const {
//         lastName,
//         firstName,
//         middleName,
//         Age,
//         Birthday,
//         Gender,
//         Address,
//         emailAddress,
//         fatherName,
//         motherName,
//         guardianName,
//         studentContact,
//         fatherContact,
//         motherContact,
//         guardianContact,
//     } = req.body;

//     res.json({ message: "Student data received", data: req.body });
// });

// console.log(
//     "Destuctured ",
//     lastName,
//     firstName,
//     middleName,
//     Age,
//     Birthday,
//     Gender,
//     Address,
//     emailAddress,
//     fatherName,
//     motherName,
//     guardianName,
//     studentContact,
//     fatherContact,
//     motherContact,
//     guardianContact,
// );

// console.log("Credentials", username, password);

// if (user === username && pass === password) {
//     res.status(200).json({ authenticated: true });
// } else {
//     res.status(401).json({ authenticated: false });
// }

app.listen(port, (err) => {
    if (err) throw err;
    console.log("\x1b[32m%s\x1b[0m", "  ▲", "[ SERVER ] is running!");
});
