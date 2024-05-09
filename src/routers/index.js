const express = require('express');
const {getProfile} = require("../middleware/getProfile");
const router = express.Router();

router.use('/contracts', getProfile, require('./contract.router'));
router.use('/jobs', getProfile, require('./job.router'));
router.use('/admin', require('./admin.router'));
router.use('/balances', require('./balances.router'));


module.exports = router;