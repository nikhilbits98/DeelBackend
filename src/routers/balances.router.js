const express = require('express');
const {balanceController} = require("../controllers");
const router = express.Router();

router.post('/deposit/:userId', balanceController.depositBalanceForClient);

module.exports = router;