const express = require('express');
const {getProfile} = require("../middleware/getProfile");
const router = express.Router();

router.use('/contracts', getProfile, require('./contracts.router'));
router.use('/jobs', getProfile, require('./jobs.router'));
router.use('/admin', getProfile, require('./admin.router'));
router.use('/balances', getProfile, require('./balances.router'));


module.exports = router;