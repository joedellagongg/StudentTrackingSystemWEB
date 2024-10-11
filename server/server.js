const express = require("express");
const database = require("./config/db");
const routes = require("./routes/master");
const cors = require("cors");
const app = express();
const port = 5500;

app.use(express.json());
routes(app);

const paymongo = require("paymongo-node")("your secret api key");

// app.post("/login", (req, res) => {
//     const { username, password } = req.body;

//     console.log(username, password);

//     // const foundUser = users.find(
//     //     (u) => u.user === username && u.pass === password,
//     // );

//     // if (foundUser) {
//     //     console.log("\x1b[30m\x1b[47m%s\x1b[0m", "Great! User authenticated.");
//     //     return res.json({ message: "Login Successful", userId: foundUser.id });
//     // } else {
//     //     console.log("Invalid username or password.");
//     // }
// });

app.listen(port, (err) => {
    if (err) throw err;
    console.log("\x1b[32m%s\x1b[0m", "  ▲", "[ SERVER ] is running!");
});
