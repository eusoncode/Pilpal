const { convertReminderTimeHelper } = require('../../convertReminderTimeHelper');
const { formatDate } = require('../../formatDateTime');
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
// const updateUserSupplementStockLevel = (newValue, userId, supplementId, nextDateToTakeSupplement) => {

//   // console.log(
//   //   {newValue: newValue, userId: userId, supplementId: supplementId}
//   // );

//   const formattedNextDateSupplement = formatedDateTime(nextDateToTakeSupplement);

//   const query = `
//     UPDATE supplement_usage AS su
//     SET stocklevel = $1, time_to_be_taken = $2
//     FROM user_supplements AS us
//     WHERE su.usersupplementid = us.id
//     AND us.userid = $3
//     AND us.supplementid = $4
//     RETURNING *
//   `;

//   const queryParam = [newValue, formattedNextDateSupplement, userId, supplementId];

//   return db
//     .query(query, queryParam)
//     .then(result => {
//       const editedSupplementUsage = result.rows[0];
//       // console.log('Supplement Usage after updateUserSupplementStockLevel:', editedSupplementUsage);
//       return Promise.resolve(editedSupplementUsage);
//     })
//     .catch((err) => {
//       console.error('Error updating supplement usage stocklevel:', err.message);
//       throw err;
//     });
// };

const updateUserSupplementStockLevel = (newValue, userId, supplementId, currentDate, nextDateToTakeSupplement) => {
  const formattedNextDateSupplement = formatDate(nextDateToTakeSupplement);
  const formattedCurrentDateSupplement = formatDate(currentDate);

  console.log({
    formattedNextDateSupplement: formattedNextDateSupplement,
    formattedCurrentDateSupplement: formattedCurrentDateSupplement
  });

  return db.connect()
    .then(client => {
      // Start a transaction
      return client.query('BEGIN')
        .then(() => {
          // Update user_supplements table
          return client.query(`
            UPDATE user_supplements
            SET time_taken = $1
            WHERE userid = $2 AND supplementid = $3
          `, [formattedCurrentDateSupplement, userId, supplementId]);
        })
        .then(() => {
          // Update supplement_usage table
          return client.query(`
            UPDATE supplement_usage
            SET stocklevel = $1, time_to_be_taken = $2, updated_at = $3
            FROM user_supplements
            WHERE supplement_usage.usersupplementid = user_supplements.id
            AND user_supplements.userid = $4
            AND user_supplements.supplementid = $5
            RETURNING supplement_usage.*;
          `, [newValue, formattedNextDateSupplement, formattedCurrentDateSupplement, userId, supplementId]);
        })
        .then(result => {
          // Commit the transaction
          return client.query('COMMIT')
            .then(() => {
              const editedSupplementUsage = result.rows[0];
              console.log('Updated time_taken in user_supplements and time_to_taken and stocklevel in supplement_usage tables');
              return Promise.resolve(editedSupplementUsage);
            });
        })
        .catch(err => {
          // Rollback the transaction in case of an error
          return client.query('ROLLBACK')
            .then(() => {
              console.error('Error updating supplement usage and user supplement time_taken:', err.message);
              throw err;
            });
        })
        .finally(() => {
          // Release the client back to the pool
          client.release();
        });
    })
    .catch(err => {
      console.error('Error connecting to Postgres server:', err.message);
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

const refillStockLevel = (userId, supplementId, newStockquantity) => {

  // console.log({
  //   userId: userId
  //   supplementId: supplementId
  //   newStockquantity: newStockquantity
  // });

  const query = `
    WITH updated_supplementLineItem AS (
      UPDATE supplement_lineitem
      SET type = $3
      WHERE supplementId = $2
      RETURNING *
    )
    UPDATE supplement_usage
    SET stocklevel = $4
    FROM updated_supplementLineItem
    JOIN user_supplements ON user_supplements.supplementid = updated_supplementLineItem.id
    WHERE user_supplements.userid = $1
    AND user_supplements.supplementid = $2
    AND supplement_usage.usersupplementid = user_supplements.id
    RETURNING supplement_usage.*;
  `;
  
  const queryParam = [userId, supplementId, 'intake', newStockquantity];

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

// const addToSupplementUsage = (supplementId, newSupplement, quantitySum) => {
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

const addToSupplementUsage = (userSupplementId, newSupplement, quantitySum) => {
  const {
    reminderTime,
    intakeFrequency,
    refillLevel
  } = newSupplement;
  
  console.log({
    reminderTime: reminderTime
  });


  // Convert reminderTime to a PostgreSQL compatible timestamp string
  const reminderTimestamp = convertReminderTimeHelper(reminderTime);
  console.log({
    reminderTimestamp: reminderTimestamp
  });


  // Parse supplementId, quantitySum, and refillLevel to integers
  const parsedSupplementId = parseInt(userSupplementId, 10);
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

const editInSupplementUsage = (userId, editedSupplementToBeUpdated) => {
  const {
    time,
    intakefrequency,
    refilllevel,
    stockquantity,
    id
  } = editedSupplementToBeUpdated;

  console.log({
    timefromquery:time,
    intakefrequency:intakefrequency,
    refilllevel: refilllevel,
    stockquantity:stockquantity,
    id:id
  });


  // Convert reminderTime to a PostgreSQL compatible timestamp string
  const reminderTimestamp = convertReminderTimeHelper(time);
  // console.log(reminderTimestamp);

  // Parse supplementId, quantitySum, and refillLevel to integers
  // const parsedSupplementId = parseInt(id, 10);
  // const parsedRefillLevel = parseInt(refilllevel, 10);

  const query = `
  WITH selected_userSupplement AS (
    SELECT *
    FROM user_supplements
    WHERE user_supplements.userid = $5 AND user_supplements.supplementid = $6
  )
  UPDATE supplement_usage 
  SET 
    time_to_be_taken = $1,
    intakefrequency = $2,
    refilllevel = $3,
    stocklevel = $4,
    updated_at = CURRENT_TIMESTAMP
  WHERE supplement_usage.userSupplementId = (SELECT id FROM selected_userSupplement)
  RETURNING *
`;

  const queryParam = [reminderTimestamp, intakefrequency, refilllevel, stockquantity, userId, id];

  return db
    .query(query, queryParam)
    .then(result => {
      const updatedSupplementUsage = result.rows[0];
      // console.log({updatedSupplementUsage: updatedSupplementUsage});
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
};