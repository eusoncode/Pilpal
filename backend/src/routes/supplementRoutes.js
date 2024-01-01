const express = require('express');
const router  = express.Router();
const supplementQueries = require('../db/queries/supplements');
const userSupplementQueries = require('../db/queries/user_supplement');
const userQueries = require('../db/queries/users');

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
  const newSupplement = req.formData;

  if (!idFromCookie) {
    return res.status(403).send("😒😒😒😒You are not logged in!!! Log in to use the BuyBuddy....");
  }

  let userData;

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

      if (!newSupplement.name || !newSupplement.description || !newSupplement.manufacturer || !newSupplement.cost || !newSupplement.quantity) { // if email or password is empty, request for them
        return res.status(400).send("Please complete the form with the required info");
      }

      return supplementQueries.addNewSupplement(newSupplement);
    })
    .then((newSupplements) => {
      if (!newSupplements) {
        return res.status(404).send("Could not add new supplement to the list of supplements");
      }

      return userSupplementQueries.addToUserSupplement(userData.id, newSupplements.id);
    })
    .then((userSupplementsAdd) => {
      if (!userSupplementsAdd) {
        return res.status(404).send("Could not add new supplement to user supplements");
      }
      // Now you have both userData and products data
      // const data = { user: userData, userSupplementsAdd: userSupplementsAdd };
      res.status(200).json({ message: "New supplement was successful added" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching data");
    });
});

// ----------------------- removeSupplement
// ----------------------- markSupplementAsOutofStock

module.exports = router;