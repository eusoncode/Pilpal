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
      // console.log(suppliments);
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
const addNewSupplement = (newSupplement) => {

  // console.log({newSupplement: newSupplement});
  
  const {
    name,
    manufacturer,
    productUrl,
    description
  } = newSupplement;

  const images = { src: productUrl};
  const imagesString = JSON.stringify(images); // Convert object to JSON string
  // console.log(imagesString);

  const query = `
    INSERT INTO supplements (name, description, manufacturer, images) 
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `;

  const queryParam = [name, description, manufacturer, imagesString];

  return db
    .query(query, queryParam)
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
const removeSupplement = function(supplementId) {
  return db
    .query(`DELETE FROM supplements WHERE id = $1 RETURNING *`, [supplementId])
    .then((result) => {
      const removedSupplement = result.rows[0];
      return Promise.resolve(removedSupplement);
    })
    .catch((err) => {
      console.error('Error removing supplement:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};

// ----------------------- markSupplementAsOutofStock

// ----------------------- editSupplement
const editSupplement = function(updatedSupplement) {
  const { id, name, description, manufacturer, cost, quantity, images } = updatedSupplement;
  
  return db
    .query(`
      UPDATE supplements 
      SET 
        name = $1,
        description = $2,
        manufacturer = $3,
        cost = $4,
        quantity = $5,
        images = $6,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $7
      RETURNING *
    `, [name, description, manufacturer, cost, quantity, images, id])
    .then((result) => {
      const editedSupplement = result.rows[0];
      return Promise.resolve(editedSupplement);
    })
    .catch((err) => {
      console.error('Error editing supplement:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};


module.exports = {
  getSupplements,
  // getSupplementById,
  // getSupplementByName,
  editSupplement,
  addNewSupplement,
  removeSupplement,
  // markSupplementAsOutofStock
};
