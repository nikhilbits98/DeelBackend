const express = require('express');
const {jobController} = require("../controllers");
const router = express.Router();

router.get('/unpaid', jobController.getUnpaidJobs);

router.post('/:jobId/pay', jobController.payForJob);

module.exports = router;