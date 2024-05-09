const express = require('express');
const {adminController} = require("../controllers");
const router = express.Router();

router.get('/best-profession', adminController.getMostPayingProfession);

router.get('/best-clients', adminController.getMostPayingClients);


module.exports = router;