const database = require("../config/db");

async function addStudent(data) {
    const {
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

    const query = `INSERT INTO studuser(lname, fname, mname, age, birthday, gender, address, email, father, mother, guardian, studcontact, fathercontact, mothercontact, guardiancontact) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    try {
        const result = await database.query(query, [
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
