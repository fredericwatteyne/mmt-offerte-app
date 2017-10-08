const express = require('express');
const router = express.Router();

var db = require('../queries');

router.get('/secundaireCollectorOffertes', db.getAllPrimaireCollectorOffertes);
router.get('/secundaireCollectorOffertes/:id', db.getSinglePrimaireCollectorOffertes);
router.get('/contacten', db.getAllContactAanvragen);
router.post('/contact', db.createContactAanvraag);

module.exports = router;