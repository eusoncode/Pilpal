const express = require('express');
const router  = express.Router();
const supplementQueries = require('../db/queries/supplements');

// Return information about the current user (based on cookie value)
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

module.exports = router;