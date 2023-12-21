const db = require('../connection');

// Get request query

/**
 * Get a all users from the database.
 * @return {Promise<{}>} A promise for supplement.
 */
const getUserSupplements = (id) => {
  const query = `
    SELECT supplements.* 
    FROM supplements 
    JOIN user_supplements 
    ON supplements.id = user_supplements.supplementId 
    WHERE user_supplements.userId = $1;
  `;

  return db
    .query(query, [id])
    .then(result => {
      const userSupplements = result.rows;
      return userSupplements || []; // Return an empty array if no user supplements found
    })
    .catch(error => {
      console.error(error);
      throw new Error("Error fetching user supplements");
    });
};


// ----------------------- getUserByUserId

// Post request query

// ----------------------- addToUserSupplement
const addToUserSupplement = (userId, supplementId) => {
  const query = `
    INSERT INTO user_supplements (userId, supplementId, number_of_pills_taken, time_taken, effectiveness)
    VALUES ($1, $2, $3, $4, $5) RETURNING *
  `;

  const queryParam = [userId, supplementId, null, null, null];

  return db
    .query(query, queryParam)
    .then(result => {
      const userSupplementsAdd = result.rows[0];
      return Promise.resolve(userSupplementsAdd);
    })
    .catch((err) => {
      console.error('Error adding newSupplement:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};

// ----------------------- removeUserSupplement

module.exports = {
  getUserSupplements,
  // getUserByEmail,
  // getUserById,
  addToUserSupplement
};