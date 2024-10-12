const jwt = require("jsonwebtoken");
async function authLogin(data) {
    const { username, password } = data;

    console.log("[ MODELS ] ", username, password);

    const dummy = {
        user: "admin",
        pass: "pass",
    };

    if (username == dummy.user && password == dummy.pass) {
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
        res.json({ message: "error" });
    }
}

module.exports = {
    authLogin,
};
