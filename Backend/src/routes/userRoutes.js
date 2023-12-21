const express = require('express');
const router  = express.Router();
const bcrypt = require("bcrypt");
const userQueries = require('../db/queries/users');
const userSearchHelper = require('../userSearchHelper'); // Import the getUserWithEmail function
const userSupplementQueries = require('../db/queries/user_supplement');


// Get requests for user

// User dashboard
router.get("/:id", (req, res) => {
  const userId = parseInt(req.params.id);

  if (!userId) {
    return res.status(403).send("😒😒😒😒You are not logged in!!! Log in to use the BuyBuddy....");
  }

  let userData;

  userQueries.getUserById(userId)
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

      return userSupplementQueries.getUserSupplements(user.id);
    })
    .then((userSupplements) => {
      // Now you have both userData and products data
      const data = { user: userData, userSupplements: userSupplements };
      res.json(data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error fetching data");
    });
});

// Post requests for user

// Register a new buyer user
router.post("/signup", (req, res) => {
  const user = req.body;
  const emailInput = user.email;
  const passwordInput = user.password;
  user.password = bcrypt.hashSync(passwordInput, 12);

  if (!emailInput || !passwordInput) { // if email or password is empty, request for them
    return res.status(400).send("Please enter an email and password");
  }

  // Check if the user with the same email already exists
  userSearchHelper.getUserWithEmail(emailInput)
    .then((userFound) => {
      if (userFound) {
        return res.status(400).send("User already exists");
      }

      userQueries.addUser(user)
        .then((newUserAdded) => {
          req.session.userId = newUserAdded.id;
          res.json(newUserAdded);
        })
        .catch((e) => res.status(500).send("Error creating user"));
    })
    .catch((e) => res.status(500).send("Error checking user existence"));
});

// Login a user as a buyer
router.post("/login", (req, res) => {
  const emailInput = req.body.email;
  const passwordInput = req.body.password;

  if (!emailInput || !passwordInput) { // if email or password is empty, request for them
    return res.status(400).send("Please enter an email and password");
  }

  userQueries
    .getUserByEmail(emailInput)
    .then((userFound) => {
      const hashedPassword = userFound.password; // Hash user password
      
      if (!userFound) {
        return res.status(403).send("😒😒😒😒User account does not exist. Please register a new user account");
      }
    
      if (userFound && !bcrypt.compareSync(passwordInput, hashedPassword)) {
        return res.status(403).send("😒😒😒😒Email or Password is incorrect!.... Please enter a valid email and password");
      }

      req.session.userId = userFound.id;
      res.status(200).json({
        message: `${userFound.username} Logged successful`,
        userFound
      });
    });
});

// Log a user out
router.post("/logout", (req, res) => {
  req.session.userId = null;
  res.status(200).send('Logged out successfully');
});

module.exports = router;