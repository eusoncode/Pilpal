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
// ----------------------- getUserById

// Post request query

// ----------------------- addUser

module.exports = {
  getUsers,
  // getUserByEmail,
  // getUserById,
  // addUser
};