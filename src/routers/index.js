const express = require('express');
const {getProfile} = require("../middleware/getProfile");
const router = express.Router();

router.use('/contracts', require('./contracts.router'));
router.use('/jobs', require('./jobs.router'));
router.use('/admin', require('./admin.router'));
router.use('/balances', require('./balances.router'));


module.exports = router;