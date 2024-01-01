const db = require('../connection');

// Get request query

/**
 * Get a all suppliments from the database.
 * @return {Promise<{}>} A promise to the user.
 */
const getSupplementUsage = () => {
  return db
    .query('SELECT * FROM supplement_usage;')
    .then(result => {
      let resolvedSupplimentUsage = null;
      const supplimentUsage = result.rows;
      // console.log(supplimentUsage);
      if (supplimentUsage) {
        resolvedSupplimentUsage = supplimentUsage;
      }
      return Promise.resolve(resolvedSupplimentUsage);
    });
};


// ----------------------- getSupplementUsageById

// Post request query

/**
 * Add a new user to the database.
const updateUserSupplementStockLevel = (newValue, userId, supplementId) => {
 * @param {{newValue: Integer, userId: Integer, supplementId: Integer}}
 * @return {Promise<{}>} A promise to the user.
 */
const updateUserSupplementStockLevel = (newValue, userId, supplementId) => {
  const query = `
    UPDATE supplement_usage
    SET stocklevel = $1
    FROM user_supplements
    WHERE user_supplements.userid = $2 AND user_supplements.supplementid = $3
    RETURNING supplement_usage.*
  `;
  
  const queryParam = [newValue, userId, supplementId];

  return db
    .query(query, queryParam)
    .then(result => {
      const editedSupplementUsage = result.rows[0];
      // console.log(editedSupplementUsage);
      return Promise.resolve(editedSupplementUsage);
    })
    .catch((err) => {
      console.error('Error updating supplement usage stocklevel:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};

const refillStockLevel = (userId, supplementId) => {
  
  const query = `
    UPDATE supplement_usage
    SET stocklevel = supplements.quantity
    FROM user_supplements
    JOIN supplements ON user_supplements.supplementid = supplements.id
    WHERE user_supplements.userid = $1 AND user_supplements.supplementid = $2 AND supplement_usage.usersupplementid = user_supplements.id
    RETURNING supplement_usage.*
  `;
  
  const queryParam = [userId, supplementId];

  return db
    .query(query, queryParam)
    .then(result => {
      const editedSupplementUsage = result.rows[0];
      // console.log(editedSupplementUsage);
      return Promise.resolve(editedSupplementUsage);
    })
    .catch((err) => {
      console.error('Error updating supplement usage stocklevel:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};

module.exports = {
  getSupplementUsage,
  updateUserSupplementStockLevel,
  refillStockLevel
  // getSupplementUsageById
};