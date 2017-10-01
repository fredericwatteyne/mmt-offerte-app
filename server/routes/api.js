const express = require('express');
const router = express.Router();

var db = require('../queries');

router.get('/primaireCollectorOffertes', db.getAllPrimaireCollectorOffertes);
router.get('/primaireCollectorOffertes/:id', db.getSinglePrimaireCollectorOffertes);

module.exports = router;