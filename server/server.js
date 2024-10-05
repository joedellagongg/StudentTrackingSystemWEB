const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get("/home", (req, res) => {
    res.json({
        message: "Like this video!",
        people: ["Arpan", "Jack", "Barry"],
    });
});

app.listen(port, (err) => {
    if (err) throw err;
    console.log(` ✅ [ SERVER ] is running!`);
});
