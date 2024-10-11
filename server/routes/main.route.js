const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("You are in a main server endpoint");
    res.json({
        message: "Hello! I'm Main, main server endpoint",
    });
});

module.exports = router;
