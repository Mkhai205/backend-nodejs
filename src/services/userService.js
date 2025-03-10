const connection = require('../config/database'); // import connection

const createUser = async (req, res) => {
    const { email, name, city } = req.body;

    if (!email || !name || !city) {
        return res.status(400).send('All fields are required.');
    }

    try {
        const [rows, fields] = await connection.query('INSERT INTO Users (email, name, city) VALUES (?, ?, ?)', [email, name, city]);
        // console.log('The solution is: ', rows);
        return res.status(201).send({ message: 'User created successfully.' });
    } catch (error) {
        console.error('Database error: ', error);
        return res.status(500).send({ message: 'Internal server error.' });
    }
};

const updateUser = async (req, res) => {
    try {
        const {id} = req.params;
        const {email, name, city} = req.body;
        if(!id || !email || !name || !city) {
            return res.status(400).send({message: 'All fields are required.'});
        }
        const [rows, fields] = await connection.query('UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?', [email, name, city, id]);
        return res.status(200).send({message: 'User updated successfully.'});
    } catch (error) {
        console.error('Database error: ', error);
        return res.status(500).send({message: 'Internal server error.'});
    }
};

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        if(!id) {
            return res.status(400).send({message: 'ID is required.'});
        }
        const [rows, fields] = await connection.query('DELETE FROM Users WHERE id = ?', [id]);
        return res.status(200).send({message: 'User deleted successfully.'});
    } catch (error) {
        console.error('Database error: ', error);
        return res.status(500).send({message: 'Internal server error.'});
    }
};

module.exports = {
    createUser,
    updateUser,
    deleteUser,
}; // export the functions