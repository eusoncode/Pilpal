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

module.exports = {
  getSupplementCurrentStockLevel
};