const connection = require('../config/database'); // import connection

const getHomePage = (req, res) => {
    // process data
    // call model to get data from database
    return res.render('home');
};

const getCreateUserPage = (req, res) => {
    return res.render('create-user');
};

const getListUsersPage = async (req, res) => {
    const [rows, fields] = await connection.query('SELECT * FROM Users');

    return res.render('list-users', { data: rows });
};

module.exports = {
    getHomePage,
    getCreateUserPage,
    getListUsersPage,
}