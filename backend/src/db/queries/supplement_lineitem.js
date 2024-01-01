const db = require('../connection');

const addToSupplementLineItem = (userId, supplementId, newSupplement) => {
  // console.log('userId:', userId);
  
  const {
    startingDate,
    endingDate,
    supplementType,
    price
  } = newSupplement;

  
  const query = `
    INSERT INTO user_supplements (userId, supplementId, startingDate, endingDate, supplementType, price)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *
  `;

  const queryParam = [userId, supplementId, startingDate, endingDate, supplementType, price];


  return db
    .query(query, queryParam)
    .then(result => {
      const updatedSupplementLineItem = result.rows[0];
      // console.log(updatedSupplementLineItem);
      return Promise.resolve(updatedSupplementLineItem);
    })
    .catch((err) => {
      console.error('Error adding new supplement to supplement lineItem:', err.message);
      throw err;
    });
};


module.exports = {
  addToSupplementLineItem
};