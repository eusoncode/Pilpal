const db = require('./db/connection');

// Check if user exists using the email address
const getUserWithEmail = function(email) {
  // Use parameterized query to prevent SQL injection
  return db
    .query(`SELECT * FROM users WHERE email ILIKE $1`, [email])
    .then((result) => {
      // Initialize resolvedUser as null
      let resolvedUser = null;
      
      
      // Check if any rows were returned
      if (result.rows.length > 0) {
        const user = result.rows[0];
        // Check if the email matches (case-insensitive)
        if (user.email.toLowerCase() === email.toLowerCase()) {
          resolvedUser = user;
        }
      }
      // console.log(resolvedUser);
      return Promise.resolve(resolvedUser); // Resolve with the found user or null
    })
    .catch((err) => {
      console.error('Error querying database:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};

// const getUserWithUsername = function(username) {
//   // Use parameterized query to prevent SQL injection
//   return db
//     .query(`SELECT * FROM users WHERE username ILIKE $1`, [username])
//     .then((result) => {
//       // Initialize resolvedUser as null
//       let resolvedUser = null;
      
      
//       // Check if any rows were returned
//       if (result.rows.length > 0) {
//         const user = result.rows[0];
//         // Check if the email matches (case-insensitive)
//         if (user.username.toLowerCase() === username.toLowerCase()) {
//           resolvedUser = user;
//         }
//       }
//       // console.log(resolvedUser);
//       return Promise.resolve(resolvedUser); // Resolve with the found user or null
//     })
//     .catch((err) => {
//       console.error('Error querying database:', err.message);
//       throw err; // Rethrow the error to be handled elsewhere
//     });
// };

const getUserWithUsername = function(username) {
  // Use parameterized query to prevent SQL injection
  return db
    .query('SELECT * FROM users WHERE LOWER(username) = LOWER($1)', [username])
    .then((result) => {
      console.log(result.rows);
      // Initialize resolvedUser as null
      let resolvedUser = null;

      // Check if any rows were returned
      if (result.rows.length > 0) {
        const user = result.rows[0];
        resolvedUser = user; // Assign the found user to resolvedUser
      }

      return Promise.resolve(resolvedUser); // Resolve with the found user or null
    })
    .catch((err) => {
      console.error('Error querying database:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};


module.exports = {
  getUserWithEmail,
  getUserWithUsername
};
