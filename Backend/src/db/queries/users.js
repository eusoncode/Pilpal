const db = require('../connection');

/**
 * Get a all users from the database.
 * @return {Promise<{}>} A promise to the user.
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

module.exports = {
  getUsers
};