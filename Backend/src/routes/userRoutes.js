const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

// Get requests

// Return information about the current user (based on cookie value)
router.get("/", (req, res) => {
  userQueries.getUsers()
    .then((user) => {
      if (!user) {
        return res.status(404).send("No user found");
      }
      res.json(user);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching data");
    });
});

// ----------------------- getUserById
// ----------------------- getEmailById


// Post requests

// ----------------------- addUser

module.exports = router;