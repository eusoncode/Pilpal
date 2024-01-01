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
  // console.log('newValue:', newValue, 'userId:', userId, 'supplementId:', supplementId);

  const query = `
    UPDATE supplement_usage AS su
    SET stocklevel = $1
    FROM user_supplements AS us
    WHERE su.usersupplementid = us.id
      AND us.userid = $2
      AND us.supplementid = $3
    RETURNING *
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

// const refillStockLevel = (userId, supplementId) => {
  
//   const query = `
//     UPDATE supplement_usage
//     SET stocklevel = (UPDATE supplement SET type = $3 RETURNING supplements.quantity)
//     FROM user_supplements
//     JOIN supplements ON user_supplements.supplementid = supplements.id
//     WHERE user_supplements.userid = $1 AND user_supplements.supplementid = $2 AND supplement_usage.usersupplementid = user_supplements.id
//     RETURNING supplement_usage.*
//   `;
  
//   const queryParam = [userId, supplementId, 'intake'];

//   return db
//     .query(query, queryParam)
//     .then(result => {
//       const editedSupplementUsage = result.rows[0];
//       // console.log(editedSupplementUsage);
//       return Promise.resolve(editedSupplementUsage);
//     })
//     .catch((err) => {
//       console.error('Error updating supplement usage stocklevel:', err.message);
//       throw err; // Rethrow the error to be handled elsewhere
//     });
// };

const refillStockLevel = (userId, supplementId) => {
  // console.log('userId:', userId);
  const query = `
    WITH updated_supplement AS (
      UPDATE supplements
      SET type = $3
      WHERE id = $2
      RETURNING *
    )
    UPDATE supplement_usage
    SET stocklevel = updated_supplement.quantity
    FROM updated_supplement
    JOIN user_supplements ON user_supplements.supplementid = updated_supplement.id
    WHERE user_supplements.userid = $1
    AND user_supplements.supplementid = $2
    AND supplement_usage.usersupplementid = user_supplements.id
    RETURNING supplement_usage.*;
  `;
  
  const queryParam = [userId, supplementId, 'intake'];

  return db
    .query(query, queryParam)
    .then(result => {
      const editedSupplementUsage = result.rows[0];
      // console.log(editedSupplementUsage);
      return Promise.resolve(editedSupplementUsage);
    })
    .catch((err) => {
      console.error('Error updating supplement usage stocklevel:', err.message);
      throw err;
    });
};

const addToSupplementUsage = (supplementId, newSupplement, quantitySum) => {
  // console.log('userId:', userId);
  // Note: quantity should be a sum of exist stocklevel and new quantity of the supplement
  
  const {
    reminderTime,
    intakeFrequency,
    refillLevel
  } = newSupplement;

  
  const query = `
    INSERT INTO supplement_usage (userSupplementId, time_to_be_taken, stocklevel, intakeFrequency, refillLevel)
    VALUES ($1, $2, $3, $4, $5) RETURNING *
  `;

  const queryParam = [supplementId, reminderTime, quantitySum, intakeFrequency, refillLevel];


  return db
    .query(query, queryParam)
    .then(result => {
      const updatedSupplementUsage = result.rows[0];
      // console.log(updatedSupplementUsage);
      return Promise.resolve(updatedSupplementUsage);
    })
    .catch((err) => {
      console.error('Error adding new supplement to supplement usage:', err.message);
      throw err;
    });
};



module.exports = {
  getSupplementUsage,
  updateUserSupplementStockLevel,
  refillStockLevel,
  addToSupplementUsage
  // getSupplementUsageById
};