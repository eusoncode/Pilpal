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
      console.log(supplimentUsage);
      if (supplimentUsage) {
        resolvedSupplimentUsage = supplimentUsage;
      }
      return Promise.resolve(resolvedSupplimentUsage);
    });
};


// ----------------------- getSupplementUsageById

// Post request query

module.exports = {
  getSupplementUsage,
  // getSupplementUsageById
};