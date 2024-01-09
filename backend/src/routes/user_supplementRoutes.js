const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users');
// const supplementQueries = require('../db/queries/supplements');
const userSupplementQueries = require('../db/queries/user_supplement');
// const { updatePasswords } = require('../update_passwords');

//Get request

router.get("/", (req, res) => {
  const userId = req.session.userId;

  // updatePasswords();

  if (!userId) {
    return res.status(403).send("😒😒😒😒You are not logged in!!! Log in to use the BuyBuddy....");
  }

  userQueries.getUserById(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send("No user with that ID");
      }

      return userSupplementQueries.getUserSupplements(user.id);
    })
    .then((userSupplements) => {
      res.status(200).json({
        userSupplements
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching data");
    });
});

// //Post request

// //------------------ Edit a supplement in User supplement list

// //------------------ Remove a supplement from User supplement list

module.exports = router;