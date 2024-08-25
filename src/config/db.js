// const { error } = require('console');
const mysql = require('mysql');

const mydb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbsts",
});

mydb.connect(err => {
    if (err) {
        console.log('Error: Not connecting to MySQL Database', err)
    }else{
        console.log('Connected to MySQL Database')
    }
});

module.exports = mydb;