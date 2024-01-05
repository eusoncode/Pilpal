const db = require('./db/connection');

// Get the current stocklevel of the supplement
const getSupplementCurrentStockLevel = (userId, supplementId) => {

  // Use parameterized query to prevent SQL injection

  const query = `
    SELECT su.stocklevel
    FROM supplement_usage AS su
    JOIN user_supplements AS us ON us.id = su.userSupplementId
    WHERE us.userId = $1 AND us.supplementId = $2
  `;

  const queryParam = [userId, supplementId];

  return db
    .query(query, queryParam)
    .then((result) => {
      const currentStocklevel = result.rows[0];
      // Check if any rows were returned
      if (currentStocklevel === null) {
        console.error('currentStocklevel is:', currentStocklevel);
        return;
      }
      // console.log(resolvedUser);
      return Promise.resolve(currentStocklevel); // Resolve with the found user or null
    })
    .catch((err) => {
      console.error('Error querying database:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};

// Get the current stocklevel of the supplement
const getSupplementInitialQuantity = (userId, parsedSupplementId) => {

  // console.log({
  //   userId: userId,
  //   parsedSupplementId: parsedSupplementId
  // });

  // Use parameterized query to prevent SQL injection

  const query = `
    SELECT si.quantity
    FROM supplement_lineitem AS si
    JOIN supplements AS s ON s.id = si.supplementid
    JOIN user_supplements AS us ON us.supplementid = s.id
    WHERE us.userId = $1 AND us.supplementId = $2
  `;

  const queryParam = [userId, parsedSupplementId];

  return db
    .query(query, queryParam)
    .then((result) => {
      const supplementInitialQuantity = result.rows[0];
      // console.log({
      //   supplementInitialQuantityy: supplementInitialQuantity.quantity
      // });
      // Check if any rows were returned
      if (supplementInitialQuantity.quantity === null) {
        console.error('supplementInitialQuantity is:', supplementInitialQuantity.quantity);
        return;
      }
      // console.log({
      //   supplementInitialQuantityy: supplementInitialQuantity.quantity
      // });
      return Promise.resolve(supplementInitialQuantity.quantity); // Resolve with the found user or null
    })
    .catch((err) => {
      console.error('Error querying database:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};

module.exports = {
  getSupplementCurrentStockLevel,
  getSupplementInitialQuantity
};
