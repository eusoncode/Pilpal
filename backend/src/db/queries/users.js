const db = require('../connection');

// Get request query

/**
 * Get a all users from the database.
 * @return {Promise<{}>} A promise for supplement.
 */
const getUsers = () => {
  return db
    .query('SELECT * FROM users;')
    .then(result => {
      let resolvedUsers = null;
      const users = result.rows;
      // console.log(users);
      if (users) {
        resolvedUsers = users;
      }
      return Promise.resolve(resolvedUsers);
    });
};

// ----------------------- getUserByEmail

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserByEmail = function(email) {
  return db
    .query(`SELECT * FROM users WHERE email like $1`, [email])
    .then((result) => {
      let resolvedUser = null;
      const user = result.rows[0];
      if (user && user.email.toLowerCase() === email.toLowerCase()) {
        resolvedUser = user;
      }
      return Promise.resolve(resolvedUser);
    })
    .catch((err) => {
      console.error('Error querying database:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};

// ----------------------- getUserById
/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserById = function(id) {
  return db
    .query(`SELECT * FROM users WHERE id = $1`, [id])
    .then((result) => {
      let resolvedUser = null;
      const user = result.rows[0];
      if (user && user.id === id) {
        resolvedUser = user;
      }
      return Promise.resolve(resolvedUser);
    })
    .catch((err) => {
      console.error('Error querying database:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};


// Post request query

// ----------------------- addUser
/**
 * Add a new user to the database.
 * @param {{username: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function(user) {
  return db
    .query(`INSERT INTO users (username, email, password) 
    VALUES ($1, $2, $3) RETURNING *`, [user.username, user.email, user.password])
    .then((result) => {
      const newUserAdded = result.rows[0];
      // console.log(newUserAdded);
      return Promise.resolve(newUserAdded);
    })
    .catch((err) => {
      console.error('Error adding user:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};

module.exports = {
  getUsers,
  getUserByEmail,
  getUserById,
  addUser
};