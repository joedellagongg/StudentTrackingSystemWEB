import database from '../config/db'

function add(firstname, lastname, username, password) {
    console.log(firstname, lastname, username, password);

    return new Promise((resolve, reject) => {
        databaseInstance.query(
            `INSERT INTO user_account (firstname, lastname, username, password) VALUES(?, ?, ?, ?)`,
            [firstname, lastname, username, password],
            (err, result) => {
                if (err) reject(err);
                resolve(result);
                // console.log(result);
            }
        );
    });
}

export default {
    get,
    add,
};