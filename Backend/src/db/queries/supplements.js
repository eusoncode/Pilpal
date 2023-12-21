const db = require('../connection');

// Get request query

/**
 * Get a all suppliments from the database.
 * @return {Promise<{}>} A promise to the supplement.
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
const addSupplement = function(supplement) {
  return db
    .query(`INSERT INTO supplements (name, description, manufacturer) 
    VALUES ($1, $2, $3) RETURNING *`, [supplement.name, supplement.description, supplement.manufacturer])
    .then((result) => {
      const newsupplementAdded = result.rows[0];
      // console.log(newsupplementAdded);
      return Promise.resolve(newsupplementAdded);
    })
    .catch((err) => {
      console.error('Error adding supplement:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};
// ----------------------- removeSupplement
// ----------------------- markSupplementAsOutofStock

module.exports = {
  getSupplements,
  // getSupplementById,
  // getSupplementByName,
  addSupplement,
  // removeSupplement,
  // markSupplementAsOutofStock
};