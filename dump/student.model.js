const database = require("../config/db");

function generateRandomString(length) {
    return crypto.randomBytes(length).toString("hex").slice(0, length);
}

async function addStudent(data) {
    const {
        NFCid,
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

    const username = generateRandomString(10);
    const password = generateRandomString(10);

    const query = `INSERT INTO studuser(nfc_id, username, password, lname, fname, mname, age, birthday, gender, address, email, father, mother, guardian, studcontact, fathercontact, mothercontact, guardiancontact) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    try {
        const result = await database.query(query, [
            NFCid,
            username,
            password,
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

        // console.log("Student added:", result);
        return result;
    } catch (error) {
        console.error("Error adding student:", error);
        throw error;
    }

    //     "Model Output",
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
}

module.exports = {
    addStudent,
};
