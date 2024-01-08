const { convertReminderTimeHelper } = require('../../convertReminderTimeHelper');
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

  // console.log(
  //   {newValue: newValue, userId: userId, supplementId: supplementId}
  // );

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
      // console.log('Supplement Usage after updateUserSupplementStockLevel:', editedSupplementUsage);
      return Promise.resolve(editedSupplementUsage);
    })
    .catch((err) => {
      console.error('Error updating supplement usage stocklevel:', err.message);
      throw err;
    });
};


const updateSupplementType = (userId, supplementId) => {
  
  // console.log(
  //   {userId: userId, supplementId: supplementId}
  // );

  const query = `    
    WITH updated_supplementLineItem AS (
      UPDATE supplement_lineitem
      SET type = 'restock'
      WHERE supplementId = $2
      RETURNING *
    )
    SELECT su.*, us.*, si.type
    FROM supplement_usage su
    JOIN user_supplements us ON su.userSupplementId = us.id
    JOIN updated_supplementLineItem si ON si.supplementId = us.supplementId
    WHERE us.userid = $1
    AND us.supplementid = $2;
  `;

  const queryParam = [userId, supplementId];

  return db
    .query(query, queryParam)
    .then(result => {
      const updateSupplementType = result.rows[0];
      // console.log('updateSupplementType:', updateSupplementType);
      return Promise.resolve(updateSupplementType);
    })
    .catch((err) => {
      console.error('Error updating supplement lineItem type:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};

const refillStockLevel = (userId, supplementId) => {
  // console.log('userId:', userId);
  // const query = `
  //   WITH updated_supplement AS (
  //     UPDATE supplements
  //     SET type = $3
  //     WHERE id = $2
  //     RETURNING *
  //   )
  //   UPDATE supplement_usage
  //   SET stocklevel = updated_supplement.quantity
  //   FROM updated_supplement
  //   JOIN user_supplements ON user_supplements.supplementid = updated_supplement.id
  //   WHERE user_supplements.userid = $1
  //   AND user_supplements.supplementid = $2
  //   AND supplement_usage.usersupplementid = user_supplements.id
  //   RETURNING supplement_usage.*;
  // `;

  const query = `
    WITH updated_supplementLineItem AS (
      UPDATE supplement_lineitem
      SET type = $3
      WHERE supplementId = $2
      RETURNING *
    )
    UPDATE supplement_usage
    SET stocklevel = updated_supplementLineItem.quantity
    FROM updated_supplementLineItem
    JOIN user_supplements ON user_supplements.supplementid = updated_supplementLineItem.id
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
//   // console.log('userId:', userId);
//   // Note: quantity should be a sum of exist stocklevel and new quantity of the supplement
  
//   const {
//     reminderTime,
//     intakeFrequency,
//     refillLevel
//   } = newSupplement;

//   // Convert reminderTime to a PostgreSQL compatible timestamp string
//   const reminderTimestamp = convertReminderTimeHelper(reminderTime);
//   console.log(reminderTimestamp);
  
//   const query = `
//     INSERT INTO supplement_usage (userSupplementId, time_to_be_taken, stocklevel, intakeFrequency, refillLevel)
//     VALUES ($1, $2, $3, $4, $5) RETURNING *
//   `;

//   const queryParam = [supplementId, reminderTimestamp, quantitySum, intakeFrequency, refillLevel];


//   return db
//     .query(query, queryParam)
//     .then(result => {
//       const updatedSupplementUsage = result.rows[0];
//       // console.log(updatedSupplementUsage);
//       return Promise.resolve(updatedSupplementUsage);
//     })
//     .catch((err) => {
//       console.error('Error adding new supplement to supplement usage:', err.message);
//       throw err;
//     });
// };

const addToSupplementUsage = (supplementId, newSupplement, quantitySum) => {
  const {
    reminderTime,
    intakeFrequency,
    refillLevel
  } = newSupplement;

  // Convert reminderTime to a PostgreSQL compatible timestamp string
  const reminderTimestamp = convertReminderTimeHelper(reminderTime);
  console.log(reminderTimestamp);

  // Parse supplementId, quantitySum, and refillLevel to integers
  const parsedSupplementId = parseInt(supplementId, 10);
  const parsedQuantitySum = parseInt(quantitySum, 10);
  const parsedRefillLevel = parseInt(refillLevel, 10);

  const query = `
    INSERT INTO supplement_usage (userSupplementId, time_to_be_taken, stocklevel, intakeFrequency, refillLevel)
    VALUES ($1, $2, $3, $4, $5) RETURNING *
  `;

  const queryParam = [parsedSupplementId, reminderTimestamp, parsedQuantitySum, intakeFrequency, parsedRefillLevel];

  return db
    .query(query, queryParam)
    .then(result => {
      const updatedSupplementUsage = result.rows[0];
      console.log({updatedSupplementUsage: updatedSupplementUsage});
      return Promise.resolve(updatedSupplementUsage);
    })
    .catch((err) => {
      console.error('Error adding new supplement to supplement usage:', err.message);
      throw err;
    });
};

const editInSupplementUsage = (supplementId, newSupplement, quantitySum) => {
  const {
    reminderTime,
    intakeFrequency,
    refillLevel
  } = newSupplement;

  // Convert reminderTime to a PostgreSQL compatible timestamp string
  const reminderTimestamp = convertReminderTimeHelper(reminderTime);
  console.log(reminderTimestamp);

  // Parse supplementId, quantitySum, and refillLevel to integers
  const parsedSupplementId = parseInt(supplementId, 10);
  const parsedQuantitySum = parseInt(quantitySum, 10);
  const parsedRefillLevel = parseInt(refillLevel, 10);

  const query = `
    INSERT INTO supplement_usage (userSupplementId, time_to_be_taken, stocklevel, intakeFrequency, refillLevel)
    VALUES ($1, $2, $3, $4, $5) RETURNING *
  `;

  const queryParam = [parsedSupplementId, reminderTimestamp, parsedQuantitySum, intakeFrequency, parsedRefillLevel];

  return db
    .query(query, queryParam)
    .then(result => {
      const updatedSupplementUsage = result.rows[0];
      console.log({updatedSupplementUsage: updatedSupplementUsage});
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
  updateSupplementType,
  refillStockLevel,
  addToSupplementUsage,
  editInSupplementUsage
  // getSupplementUsageById
};