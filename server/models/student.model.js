const database = require("../config/db");

async function getStudents() {
    const fetch = "SELECT * FROM studuser";
    return new Promise((resolve, reject) => {
        database.query(fetch, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

async function addStudent(data) {
    const {
        NFCid,
        uname,
        upass,
        lastName,
        firstName,
        middleName,
        Age,
        Birthday,
        Gender,
        Address,
        emailAddress,
        fatherName,
        motherName,
        guardianName,
        studentContact,
        fatherContact,
        motherContact,
        guardianContact,
    } = data;

    const query = `INSERT INTO studuser(nfc_id, username, password, lname, fname, mname, age, birthday, gender, address, email, father, mother, guardian, studcontact, fathercontact, mothercontact, guardiancontact) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    try {
        const result = await database.query(query, [
            NFCid,
            uname,
            upass,
            lastName,
            firstName,
            middleName,
            Age,
            Birthday,
            Gender,
            Address,
            emailAddress,
            fatherName,
            motherName,
            guardianName,
            studentContact,
            fatherContact,
            motherContact,
            guardianContact,
        ]);

        console.log("Student added:", result);
        return result;
    } catch (error) {
        console.error("Error adding student:", error);
        throw error;
    }
}

module.exports = {
    getStudents,
    addStudent,
};
