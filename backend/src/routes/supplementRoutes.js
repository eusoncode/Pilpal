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
        !newSupplement.price
        // !newSupplement.quantity
        // !newSupplement.name ||
        // !newSupplement.id ||
        // !newSupplement.name ||
        // !newSupplement.description ||
        // !newSupplement.manufacturer ||
        // !newSupplement.price ||
        // !newSupplement.quantity ||
        // !newSupplement.reminderTime ||
        // !newSupplement.startingDate ||
        // !newSupplement.endingDate ||
        // !newSupplement.refillLevel ||
        // !newSupplement.dosagePerIntake ||
        // !newSupplement.doseType ||
        // !newSupplement.intakeFrequency
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

      const userSupplementId = userSupplementsAdded.id;

      return supplementUsageQueries.addToSupplementUsage(userSupplementId, newSupplement, quantitySum);
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


// Edit a supplement by user
// router.post("/editSupplement", (req, res) => {
//   const idFromCookie = req.session.userId;
//   const editedSupplementToBeUpdated = req.body.formData;

//   console.log({
//     editedSupplementToBeUpdated: editedSupplementToBeUpdated,
//     editedSupplementToBeUpdatedId: editedSupplementToBeUpdated.id
//     // idFromCookie: idFromCookie
//   });

//   if (!idFromCookie) {
//     return res.status(403).send("😒😒😒😒You are not logged in!!! Log in to use the BuyBuddy....");
//   }

//   let userData;
//   // let supplementId;

//   userQueries.getUserById(idFromCookie)
//     .then((user) => {
//       if (!user) {
//         return res.status(404).send("No user with that ID");
//       }

//       userData = {
//         username: user.username,
//         email: user.email,
//         role: user.role,
//         id: user.id,
//       };

//       if (
//         !editedSupplementToBeUpdated.id ||
//         !editedSupplementToBeUpdated.name ||
//         !editedSupplementToBeUpdated.description ||
//         !editedSupplementToBeUpdated.manufacturer ||
//         !editedSupplementToBeUpdated.price ||
//         !editedSupplementToBeUpdated.quantity ||
//         !editedSupplementToBeUpdated.stockquantity ||
//         !editedSupplementToBeUpdated.status ||
//         !editedSupplementToBeUpdated.time ||
//         !editedSupplementToBeUpdated.startdate ||
//         !editedSupplementToBeUpdated.enddate ||
//         !editedSupplementToBeUpdated.refilllevel ||
//         !editedSupplementToBeUpdated.intakequantity ||
//         !editedSupplementToBeUpdated.dosetype ||
//         !editedSupplementToBeUpdated.intakefrequency
//       ) { // if email or password is empty, request for them
//         return res.status(400).send("Please complete the form with the required info.");
//       }

//       return supplementQueries.editSupplement(editedSupplementToBeUpdated);
//     })
//     .then((supplementsEdited) => {
//       if (!supplementsEdited) {
//         return res.status(404).send("Could not edit supplement in the list of supplements table");
//       }
//       // supplementId = editedSupplementToBeUpdated.id;

//       console.log("Supplement edited in the supplements table");

//       return userSupplementQueries.editInUserSupplement(userData.id, editedSupplementToBeUpdated);
//     })
//     .then((userSupplementsEdited) => {
//       if (!userSupplementsEdited) {
//         return res.status(404).send("Could not edit supplement in user_upplements table");
//       }

//       console.log("Supplement edited in the user_supplements table");

//       return supplementUsageQueries.editInSupplementUsage(userData.id, editedSupplementToBeUpdated);
//     })
//     .then((supplementsUsageEdited) => {
//       if (!supplementsUsageEdited) {
//         return res.status(404).send("Could not edit supplement in supplement_usage table");
//       }

//       console.log("Supplement edited in the supplement_usage table");

//       return supplementLineItemQueries.editInSupplementLineItem(editedSupplementToBeUpdated);
//     })
//     .then((supplementsLineItemEdited) => {
//       if (!supplementsLineItemEdited) {
//         return res.status(404).send("Could not edit supplement in supplement_lineitem table");
//       }
      
//       console.log("Supplement edited in the supplement_lineitem table");

//       res.status(200).json({ message: "Supplement was successful Edited" });
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).send("Error fetching data");
//     });
// });

router.post("/editSupplement", (req, res) => {
  const idFromCookie = req.session.userId;
  const editedSupplementToBeUpdated = req.body.formData;

  if (!idFromCookie) {
    return res.status(403).send("😒😒😒😒You are not logged in!!! Log in to use the BuyBuddy....");
  }

  let userData;

  userQueries
    .getUserById(idFromCookie)
    .then((user) => {
      if (!user) {
        return Promise.reject({ status: 404, message: "No user with that ID" });
      }

      userData = {
        username: user.username,
        email: user.email,
        role: user.role,
        id: user.id,
      };

      if (
        !editedSupplementToBeUpdated.id ||
        !editedSupplementToBeUpdated.name ||
        !editedSupplementToBeUpdated.description ||
        !editedSupplementToBeUpdated.manufacturer ||
        !editedSupplementToBeUpdated.price
        // !editedSupplementToBeUpdated.quantity ||
        // !editedSupplementToBeUpdated.stockquantity ||
        // !editedSupplementToBeUpdated.status ||
        // !editedSupplementToBeUpdated.time ||
        // !editedSupplementToBeUpdated.startdate ||
        // !editedSupplementToBeUpdated.enddate ||
        // !editedSupplementToBeUpdated.refilllevel ||
        // !editedSupplementToBeUpdated.intakequantity ||
        // !editedSupplementToBeUpdated.dosetype ||
        // !editedSupplementToBeUpdated.intakefrequency
      ) {
        return Promise.reject({ status: 400, message: "Please complete the form with the required info." });
      }

      return supplementQueries.editSupplement(editedSupplementToBeUpdated);
    })
    .then((supplementsEdited) => {
      if (!supplementsEdited) {
        return Promise.reject({ status: 404, message: "Could not edit supplement in the list of supplements table" });
      }

      console.log("Supplement edited in the supplements table");

      return userSupplementQueries.editInUserSupplement(userData.id, editedSupplementToBeUpdated);
    })
    .then((userSupplementsEdited) => {
      if (!userSupplementsEdited) {
        return Promise.reject({ status: 404, message: "Could not edit supplement in user_supplements table" });
      }

      console.log("Supplement edited in the user_supplements table");

      return supplementUsageQueries.editInSupplementUsage(userData.id, editedSupplementToBeUpdated);
    })
    .then((supplementsUsageEdited) => {
      if (!supplementsUsageEdited) {
        return Promise.reject({ status: 404, message: "Could not edit supplement in supplement_usage table" });
      }

      console.log("Supplement edited in the supplement_usage table");

      return supplementLineItemQueries.editInSupplementLineItem(editedSupplementToBeUpdated);
    })
    .then((supplementsLineItemEdited) => {
      if (!supplementsLineItemEdited) {
        return Promise.reject({ status: 404, message: "Could not edit supplement in supplement_lineitem table" });
      }

      console.log("Supplement edited in the supplement_lineitem table");

      res.status(200).json({ message: "Supplement was successfully edited" });
    })
    .catch((error) => {
      console.error(error);
      const status = error.status || 500;
      const message = error.message || "Error fetching data";
      res.status(status).send(message);
    });
});


module.exports = router;