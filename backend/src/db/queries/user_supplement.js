const db = require('../connection');

// Get request query

/**
 * 
 * @param {{userId: Integer}} user id
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

/**
 * Add a new user to the database.
 * @param {{userId: Integer, supplementId: Integer}}
 * @return {Promise<{}>} A promise to the user.
 */
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

/**
 * Add a new user to the database.
 * @param {{userId: Integer, supplementId: Integer}}
 * @return {Promise<{}>} A promise to the user.
 */
const editUserSupplement = (userId, supplementId, numberOfPillsTaken, timeTaken, effectiveness) => {
  const query = `
    UPDATE user_supplements 
    SET number_of_pills_taken = $3, time_taken = $4, effectiveness = $5 
    WHERE userId = $1 AND supplementId = $2 
    RETURNING *
  `;
  
  const queryParam = [userId, supplementId, numberOfPillsTaken, timeTaken, effectiveness];

  return db
    .query(query, queryParam)
    .then(result => {
      const editedUserSupplement = result.rows[0];
      return Promise.resolve(editedUserSupplement);
    })
    .catch((err) => {
      console.error('Error editing user supplement:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};

/**
 * Add a new user to the database.
 * @param {{userId: Integer, supplementId: Integer}}
 * @return {Promise<{}>} A promise to the user.
 */
const removeFromUserSupplement = (userId, supplementId) => {
  const query = `
    DELETE FROM user_supplements 
    WHERE userId = $1 AND supplementId = $2 
    RETURNING *
  `;
  
  const queryParam = [userId, supplementId];

  return db
    .query(query, queryParam)
    .then(result => {
      const removedUserSupplement = result.rows[0];
      return Promise.resolve(removedUserSupplement);
    })
    .catch((err) => {
      console.error('Error removing user supplement:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};



// ----------------------- removeUserSupplement

module.exports = {
  getUserSupplements,
  removeFromUserSupplement,
  editUserSupplement,
  addToUserSupplement
};