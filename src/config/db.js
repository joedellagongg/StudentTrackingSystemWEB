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
        console.log("⚙️  Starting Application ...");
        
        setTimeout(() => {
            console.log("⚠️  Checking database connection ...");
        }, 1000);
        
        setTimeout(() => {
            console.log("✅ Database connected successfully! ");
        }, 2000); 

    }
});

module.exports = mydb;
