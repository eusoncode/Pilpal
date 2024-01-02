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
      const editedUsers = users.filter(user => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(user.id));
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
// updatePasswords();

module.exports = {
  updatePasswords,
};


// Note: Use this to reset the passwords to original state. It must be executed in the database terminal

// UPDATE users
// SET password =
//   CASE
//     WHEN username = 'user1' THEN 'password1'
//     WHEN username = 'user2' THEN 'password2'
//     WHEN username = 'user3' THEN 'password3'
//     WHEN username = 'user4' THEN 'password4'
//     WHEN username = 'user5' THEN 'password5'
//     WHEN username = 'user6' THEN 'password6'
//     WHEN username = 'user7' THEN 'password7'
//     WHEN username = 'user8' THEN 'password8'
//     WHEN username = 'user9' THEN 'password9'
//     WHEN username = 'user10' THEN 'password10'
//     ELSE password -- If no matches, keep the existing password
//   END
// WHERE username IN ('user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8', 'user9', 'user10');

// After which you can click on signup, then back to login page when you click Pilpal
