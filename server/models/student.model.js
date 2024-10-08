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

    const query = `INSERT INTO student()`





    // console.log(
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
