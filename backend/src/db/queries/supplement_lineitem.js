const db = require('../connection');

// const addToSupplementLineItem = (supplementId, newSupplement) => {
//   // console.log('userId:', userId);
  
//   const {
//     quantity,
//     supplementType,
//     startingDate,
//     endingDate,
//     purchasedFrom,
//     price
//   } = newSupplement;

  
//   const query = `
//     INSERT INTO supplement_lineitem (supplementId, quantity, type, supplementType, startDate, endDate, purchasedFrom, price)
//     VALUES ($1, $2, "intake", $3, $4, $5, $6) RETURNING *
//   `;

//   const queryParam = [supplementId, quantity, supplementType, startingDate, endingDate, purchasedFrom, price];


//   return db
//     .query(query, queryParam)
//     .then(result => {
//       const updatedSupplementLineItem = result.rows[0];
//       console.log({updatedSupplementLineItem: updatedSupplementLineItem});
//       return Promise.resolve(updatedSupplementLineItem);
//     })
//     .catch((err) => {
//       console.error('Error adding new supplement to supplement lineItem:', err.message);
//       throw err;
//     });
// };

const addToSupplementLineItem = (supplementId, newSupplement) => {
  const {
    quantity,
    supplementType,
    startingDate,
    endingDate,
    purchasedFrom,
    price
  } = newSupplement;

  // Parse supplementId, quantity, and price to integers
  const parsedSupplementId = parseInt(supplementId, 10);
  const parsedQuantity = parseInt(quantity, 10);
  const parsedPrice = parseInt(price, 10);

  const query = `
    INSERT INTO supplement_lineitem (supplementId, quantity, type, supplementType, startDate, endDate, purchasedFrom, price)
    VALUES ($1, $2, 'intake', $3, $4, $5, $6, $7) RETURNING *
  `;

  const queryParam = [parsedSupplementId, parsedQuantity, supplementType, startingDate, endingDate, purchasedFrom, parsedPrice];

  return db
    .query(query, queryParam)
    .then(result => {
      const updatedSupplementLineItem = result.rows[0];
      console.log({ updatedSupplementLineItem: updatedSupplementLineItem });
      return Promise.resolve(updatedSupplementLineItem);
    })
    .catch((err) => {
      console.error('Error adding new supplement to supplement lineItem:', err.message);
      throw err;
    });
};

const editInSupplementLineItem = (editedSupplementToBeUpdated) => {
  const {
    quantity,
    dosagetype,
    startdate,
    enddate,
    purchasedfrom,
    price,
    status,
    id
  } = editedSupplementToBeUpdated;

  const statusReason = editedSupplementToBeUpdated.status_reason;

  // Parse supplementId, quantity, and price to integers
  const parsedQuantity = parseInt(quantity, 10);
  const parsedPrice = parseInt(price, 10);

  // Convert status to "First Alphabet in Capital Letter and the rest in small letter"
  // let formattedStatus = '';
  // if (!status === 'Active' || !status === 'Suspended') {
  //   formattedStatus = status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
  // } else {
  //   formattedStatus = status;
  // }

  const query = `
    UPDATE supplement_lineitem 
    SET 
      quantity = $1,
      supplementtype = $2,
      startdate = $3,
      enddate = $4,
      purchasedfrom = $5,
      price = $6,
      status = $7,
      status_reason = $8,
      updated_at = CURRENT_TIMESTAMP
    WHERE supplementid = $9
    RETURNING *
  `;

  const queryParam = [parsedQuantity, dosagetype, startdate, enddate, purchasedfrom, parsedPrice, status, statusReason, id];

  return db
    .query(query, queryParam)
    .then(result => {
      const updatedSupplementLineItem = result.rows[0];
      console.log({ updatedSupplementLineItem: updatedSupplementLineItem });
      return Promise.resolve(updatedSupplementLineItem);
    })
    .catch((err) => {
      console.error('Error adding new supplement to supplement lineItem:', err.message);
      throw err;
    });
};

const markSupplementAsDeleted = function(supplementId) {

  const query = `
    UPDATE supplement_lineitem
    SET to_be_deleted = $1,
        updated_at = CURRENT_TIMESTAMP AT TIME ZONE 'MDT',
        deleted_at = CURRENT_TIMESTAMP AT TIME ZONE 'MDT'
    WHERE supplementid = $2
    RETURNING *
  `;

  const queryParam = [true, supplementId];

  return db
    
    .query(query, queryParam)
    .then((result) => {
      const removedSupplement = result.rows[0];
      return Promise.resolve(removedSupplement);
    })
    .catch((err) => {
      console.error('Error removing supplement:', err.message);
      throw err; // Rethrow the error to be handled elsewhere
    });
};


module.exports = {
  addToSupplementLineItem,
  editInSupplementLineItem,
  markSupplementAsDeleted
};