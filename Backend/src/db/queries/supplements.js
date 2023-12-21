const db = require('../connection');

// Get request query

/**
 * Get a all suppliments from the database.
 * @return {Promise<{}>} A promise to the user.
 */
const getSupplements = () => {
  return db
    .query('SELECT * FROM supplements;')
    .then(result => {
      let resolvedsuppliments = null;
      const suppliments = result.rows;
      console.log(suppliments);
      if (suppliments) {
        resolvedsuppliments = suppliments;
      }
      return Promise.resolve(resolvedsuppliments);
    });
};


// ----------------------- getSupplementsById
// ----------------------- getSupplementByName

// Post request query

// ----------------------- addSupplement
// ----------------------- removeSupplement
// ----------------------- markSupplementAsOutofStock

module.exports = {
  getSupplements,
  // getSupplementById,
  // getSupplementByName,
  // addSupplement,
  // removeSupplement,
  // markSupplementAsOutofStock
};