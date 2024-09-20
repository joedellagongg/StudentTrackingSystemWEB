const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const database = require("../config/db");

exports.login = async (req, res) => {
    const { username, password } = req.body;

    const query = `SELECT * FROM users WHERE username = ?`;

    database.query(query, [username], (err, results) => {
        if (err) return res.status(500).send("Error.");
        if (!results.length) return res.status(404).send("No user found.");

        const user = results[0];

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid)
            return res.status(401).send({ auth: false, token: null });

        const token = jwt.sign({ id: user.id }, "secret-key", {
            expiresIn: 86400,
        });
        res.status(200).send({ auth: true, token });
    });
};
