const mysql = require("mysql");

const mydb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbsts",
});

mydb.connect((err) => {
    if (err) {
        console.log("Error: Not connecting to MySQL Database: \n", err);
        console.log("\nError: Not connecting to MySQL Database:");
        console.log("\nNOTE: The System runs the Database in phpMyAdmin or XAMPP");

        console.log("If it's not Connected ");
        console.log("- Check if MySQL and APACHE is turned off.\n ");
    } else {
        console.log("\nConnected to MySQL Database");
        
    }
});

module.exports = mydb;
