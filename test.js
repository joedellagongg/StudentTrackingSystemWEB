const crypto = require("crypto");

function generateRandomNumberString(length) {
    let result = "";
    for (let i = 0; i < length; i++) {
        const randomDigit = crypto.randomInt(0, 9);
        result += randomDigit;
    }
    return result;
}

const currentYear = new Date().getFullYear().toString().slice(-2);

const uname = currentYear + generateRandomNumberString(4);
const upass = currentYear + generateRandomNumberString(4);

console.log(uname, upass);
