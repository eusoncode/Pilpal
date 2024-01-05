const express = require('express');
const router  = express.Router();
// const supplementQueries = require('../db/queries/supplements');
// const userSupplementQueries = require('../db/queries/user_supplement');
const userQueries = require('../db/queries/users');
const supplementUsageQueries = require('../db/queries/supplement_usage');
const supplementSearchHelper = require('../supplementSearchHelper');


// Get requests

// All supplements

//Post request

//Add a supplement by User
router.post("/updateStockLevel", (req, res) => {
  const idFromCookie = req.session.userId;
  const stockLevelUpdate = req.body;
  // console.log('stockLevelUpdate:',stockLevelUpdate);
  const {supplementId, newValue} = stockLevelUpdate;

  if (!idFromCookie) {
    return res.status(403).send("😒😒😒😒You are not logged in!!! Log in to use the Pilpal....");
  }

  userQueries.getUserById(idFromCookie)
    .then((user) => {
      if (!user) {
        return res.status(404).send("No user with that ID");
      }

      return supplementUsageQueries.updateUserSupplementStockLevel(newValue, user.id, supplementId);
    })
    .then((response) => {
      // console.log(response.data);
      if (!response) {
        return res.status(404).send("Failed to update the supplement stock level");
      }

      // console.log({
      //   refilllevel: response.refilllevel,
      //   stocklevel: response.stocklevel,
      //   userid: response.userid
      // });
        
      if (response.refilllevel === response.stocklevel) {
        return supplementUsageQueries.updateSupplementType(response.userid, response.supplementid);
      }
      
      return response;
    })
    .then((response) => {

      console.log('response after updateSupplementType:', response);
      
      if (!response) {
        return res.status(404).send("Failed to update the supplement line item (type)");
      }

      res.status(200).json({ message: response });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching data or updating data");
    });
});

router.post("/:id", (req, res) => {
  const supplementId = req.params.id;
  const { userId, stockquantity } = req.body;
  
  console.log({
    fromSupplementUsageRouteSsupplementId: supplementId,
    userId: userId,
    stockquantity: stockquantity
  });

  if (!userId) {
    return res.status(403).send("😒😒😒😒You are not logged in!!! Log in to use the Pilpal....");
  }

  if (!supplementId) {
    return res.status(403).send("😒😒😒😒Supplement id was not provide, pls provide a valid supplement id to proceed");
  }

  userQueries.getUserById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send("No user with that ID");
      }
      
      const getnewStockquantity = () => {
        let result = 0;
        const supplementInitialQuantity = supplementSearchHelper.getSupplementInitialQuantity(user.id, supplementId);
        return result += supplementInitialQuantity + stockquantity;
      };

      const newStockquantity = getnewStockquantity();

      return supplementUsageQueries.refillStockLevel(userId, supplementId, newStockquantity);
    })
    .then((response) => {
      // console.log(response.data);
      if (!response) {
        return res.status(404).send("Could not update the supplement stocklevel");
      }

      res.status(200).json({ message: "Supplement stocklevel was successful refilled" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching data");
    });
});



module.exports = router;