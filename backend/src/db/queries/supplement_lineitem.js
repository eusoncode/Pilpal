const db = require('../connection');

const addToSupplementLineItem = (supplementId, newSupplement) => {
  // console.log('userId:', userId);
  
  const {
    quantity,
    supplementType,
    startingDate,
    endingDate,
    purchasedFrom,
    price
  } = newSupplement;

  
  const query = `
    INSERT INTO supplement_lineitem (supplementId, quantity, type, supplementType, startDate, endDate, purchasedFrom, price)
    VALUES ($1, $2, "intake", $3, $4, $5, $6) RETURNING *
  `;

  const queryParam = [supplementId, quantity, supplementType, startingDate, endingDate, purchasedFrom, price];


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