const express = require('express');
const {getProfile} = require("../middleware/getProfile");
const router = express.Router();

router.use('/contracts', require('./contracts.router'));

module.exports = router;