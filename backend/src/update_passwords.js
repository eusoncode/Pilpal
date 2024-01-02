const db = require('./db/connection');
const bcrypt = require('bcrypt');

const updateEncryptedPassword = (userId, userPassword) => {
  try {
    const hashedPassword = bcrypt.hashSync(userPassword, 10);
    const updateQuery = `UPDATE users SET password = $1 WHERE id = $2`;
    const queryParams = [hashedPassword, userId];

    return db.query(updateQuery, queryParams)
      .then(() => {
        console.log(`Password updated for user with ID ${userId}`);
      })
      .catch((error) => {
        console.error('Error updating password:', error.message);
        throw error; // Reject the promise chain
      });
  } catch (error) {
    console.error('Error hashing password:', error.message);
    return Promise.reject(error); // Return a rejected promise
  }
};

const getUsers = () => {
  return db
    .query('SELECT * FROM users;')
    .then(result => {
      const users = result.rows;
      const editedUsers = users.filter(user => [3, 4, 5, 6, 7, 8, 9, 10].includes(user.id));

      return Promise.resolve(editedUsers);
    })
    .catch(error => {
      console.error('Error fetching users:', error.message);
      throw error;
    });
};

const updatePasswords = async () => {
  try {
    const users = await getUsers();
    for (const user of users) {
      await updateEncryptedPassword(user.id, user.password);
    }
  } catch (error) {
    console.error('Error updating passwords:', error.message);
  }
};

// Call the function to update passwords
updatePasswords();

// module.exports = {
//   updatePasswords,
// };