const connection = require('./connection');
const bcrypt = require('bcrypt');

const getAll = async () => {

    const [users] = await connection.execute('SELECT * FROM users');

    return users;
}

const postCreate = async (user) => {

    const { name, email, phone, password, created_at } = user;

    const salt1 = await bcrypt.genSalt(10);

    const senhaBcrypt = await bcrypt.hash(password, salt1);

    const query = 'INSERT INTO users(name, email, phone, password, created_at) VALUES(?, ?, ?, ?, ?)';

    const createUser = await connection.execute(query, [name, email, phone, senhaBcrypt, created_at]);

    return createUser
};

const postUpdate = async (id, user) => {

    const { name, email, phone, password, created_at } = user;

    const query = 'UPDATE users SET name = ?, email = ?, phone = ?, password = ? WHERE id = ?';

    const updateUser = await connection.execute(query, [name, email, phone, password, id]);

    return updateUser;
}

const deleteUser = async (id) => {

    const deleteUser = await connection.execute('DELETE FROM users WHERE id = ?', [id]);

    return deleteUser;
} 

module.exports = {
    getAll,
    postCreate,
    postUpdate,
    deleteUser
};