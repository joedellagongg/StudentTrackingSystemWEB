const mysql = require("mysql");

const mydb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbsts",
});

mydb.connect((err) => {
    if (err) {
        console.log("\n🚧 Error: Not connected to MySQL Database:");
        console.log("   | - If it's not Connected ");
        console.log("   | - Check if MySQL and APACHE is turned off.\n ");
    } else {
        console.log("\x1b[32m%s\x1b[0m", "  ▲", "[ DATABASE ] connected!");

        setTimeout(() => {
            console.log(
                "\x1b[33m%s\x1b[0m",
                "  ▲",
                "Checking Database Connection ...",
            );
        }, 1000);

        setTimeout(() => {
            console.log("\x1b[32m%s\x1b[0m", " ✔", "Database connected");
        }, 2000);
    }
});

module.exports = mydb;
