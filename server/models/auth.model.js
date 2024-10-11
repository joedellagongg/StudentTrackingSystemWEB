const jwt = require("jsonwebtoken");
async function authLogin(data) {
    const { username, password } = data;

    console.log("[ MODELS ] ", username, password);

    if (username == "admin" && password == "admin") {
        let jwtSecretKey = "super-idol-basic-lang-ang-api-huhuhuhuhuhuhuhu";
        let datecommon = {
            time: Date(),
            userId: 12,
        };

        const token = jwt.sign(datecommon, jwtSecretKey);
        console.log(token);
        return {
            success: true,
            authenticated: true,
            message: "Authentication successful",
            token: token,
        };
    } else {
        console.log("err");
    }
}

module.exports = {
    authLogin,
};
