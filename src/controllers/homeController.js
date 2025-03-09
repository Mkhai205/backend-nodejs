const connection = require('../config/database'); // import connection

const getHomePage = (req, res) => {
    // process data
    // call model to get data from database
    return res.render('home');
};

const getForm = (req, res) => {
    return res.render('create-user');
};

const getListUsers = async (req, res) => {
    return res.render('list-users');
};

const postCreateUser = async (req, res) => {
    const { email, name, city } = req.body;

    if (!email || !name || !city) {
        return res.status(400).send('All fields are required.');
    }

    try {
        const [rows, fields] = await connection.query('INSERT INTO Users (email, name, city) VALUES (?, ?, ?)', [email, name, city]);
        console.log('The solution is: ', rows);
        return res.status(201).send('User created successfully!');
    } catch (error) {
        console.error('Database error: ', error);
        return res.status(500).send('An error occurred while creating the user.');
    }
};

module.exports = {
    getHomePage,
    getForm,
    postCreateUser,
    getListUsers
}