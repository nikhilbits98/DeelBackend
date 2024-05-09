const express = require('express');
const {balanceController} = require("../controllers");
const router = express.Router();

router.get('/deposit/:userId', balanceController.depositBalanceForClient);

module.exports = router;