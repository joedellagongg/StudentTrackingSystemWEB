const express = require("express");
const next = require("next");
const mydb = require("./src/config/db"); // MySQL connection

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const port = process.env.PORT || 3000;

app.prepare().then(() => {
    const server = express();

    server.all("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`✅ Server running on [ http://localhost:${port} ]`);
    });
});
