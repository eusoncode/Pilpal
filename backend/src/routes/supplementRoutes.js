const express = require('express');
const router  = express.Router();
const supplementQueries = require('../db/queries/supplements');
const userSupplementQueries = require('../db/queries/user_supplement');
const userQueries = require('../db/queries/users');
const supplementUsageQueries = require('../db/queries/supplement_usage');
const supplementLineItemQueries = require('../db/queries/supplement_lineitem');
const supplementSearchHelper = require('../supplementSearchHelper');

// Get requests

// All supplements
router.get("/", (req, res) => {
  supplementQueries.getSupplements()
    .then((supplement) => {
      if (!supplement) {
        return res.status(404).send("No supplement found");
      }
      res.json(supplement);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching data");
    });
});


// ----------------------- getSupplementByName

//Post request

//Add a supplement by User
router.post("/addSupplement", (req, res) => {
  const idFromCookie = req.session.userId;
  const newSupplement = req.body.formData;

  // console.log({
  //   newSupplement: newSupplement,
  //   idFromCookie: idFromCookie
  // });

  if (!idFromCookie) {
    return res.status(403).send("😒😒😒😒You are not logged in!!! Log in to use the BuyBuddy....");
  }

  let userData;
  let supplementId;

  userQueries.getUserById(idFromCookie)
    .then((user) => {
      if (!user) {
        return res.status(404).send("No user with that ID");
      }

      userData = {
        username: user.username,
        email: user.email,
        role: user.role,
        id: user.id,
      };

      if (
        !newSupplement.name ||
        !newSupplement.description ||
        !newSupplement.manufacturer ||
        !newSupplement.price ||
        !newSupplement.quantity
      ) { // if email or password is empty, request for them
        return res.status(400).send("Please complete the form with the required info");
      }

      return supplementQueries.addNewSupplement(newSupplement);
    })
    .then((newSupplementsAdded) => {
      if (!newSupplementsAdded) {
        return res.status(404).send("Could not add new supplement to the list of supplements table");
      }
      supplementId = newSupplementsAdded.id;

      return userSupplementQueries.addToUserSupplement(userData.id, supplementId, newSupplement);
    })
    .then((userSupplementsAdded) => {
      if (!userSupplementsAdded) {
        return res.status(404).send("Could not add new supplement to user_upplements table");
      }
      
      const getSumOfSupplementQuantity = () => {
        let result = 0;
        const currentSupplementStocklevel = supplementSearchHelper.getSupplementCurrentStockLevel(userData.id, supplementId);
        return result += newSupplement.quantity + currentSupplementStocklevel;
      };

      const quantitySum = getSumOfSupplementQuantity();

      return supplementUsageQueries.addToSupplementUsage(supplementId, newSupplement, quantitySum);
    })
    .then((supplementsUsageAdded) => {
      if (!supplementsUsageAdded) {
        return res.status(404).send("Could not add new supplement to supplement_usage table");
      }

      return supplementLineItemQueries.addToSupplementLineItem(supplementId, newSupplement);
    })
    .then((supplementsLineItemAdded) => {
      if (!supplementsLineItemAdded) {
        return res.status(404).send("Could not add new supplement to supplement_lineitem table");
      }

      res.status(200).json({ message: "New supplement was successful added" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching data");
    });
});


//Edit a supplement by user
router.post("/editSupplement", (req, res) => {
  const idFromCookie = req.session.userId;
  const supplementToBeEdited = req.body.formData;

  // console.log({
  //   supplementToBeEdited: supplementToBeEdited,
  //   idFromCookie: idFromCookie
  // });

  if (!idFromCookie) {
    return res.status(403).send("😒😒😒😒You are not logged in!!! Log in to use the BuyBuddy....");
  }

  let userData;
  let supplementId;

  userQueries.getUserById(idFromCookie)
    .then((user) => {
      if (!user) {
        return res.status(404).send("No user with that ID");
      }

      userData = {
        username: user.username,
        email: user.email,
        role: user.role,
        id: user.id,
      };

      if (
        !supplementToBeEdited.name ||
        !supplementToBeEdited.description ||
        !supplementToBeEdited.manufacturer ||
        !supplementToBeEdited.price ||
        !supplementToBeEdited.quantity
      ) { // if email or password is empty, request for them
        return res.status(400).send("Please complete the form with the required info");
      }

      return supplementQueries.editSupplement(supplementToBeEdited);
    })
    .then((supplementsEdited) => {
      if (!supplementsEdited) {
        return res.status(404).send("Could not edit supplement in the list of supplements table");
      }
      supplementId = supplementsEdited.id;

      return userSupplementQueries.editInUserSupplement(userData.id, supplementId, supplementToBeEdited);
    })
    .then((userSupplementsEdited) => {
      if (!userSupplementsEdited) {
        return res.status(404).send("Could not edit supplement in user_upplements table");
      }

      return supplementUsageQueries.editSupplementUsage(supplementId, supplementToBeEdited);
    })
    .then((supplementsUsageEdited) => {
      if (!supplementsUsageEdited) {
        return res.status(404).send("Could not edit supplement in supplement_usage table");
      }

      return supplementLineItemQueries.editInSupplementLineItem(supplementId, supplementToBeEdited);
    })
    .then((supplementsLineItemEdited) => {
      if (!supplementsLineItemEdited) {
        return res.status(404).send("Could not edit supplement in supplement_lineitem table");
      }

      res.status(200).json({ message: "New supplement was successful Edited" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching data");
    });
});

// ----------------------- removeSupplement
// ----------------------- markSupplementAsOutofStock

module.exports = router;