const express = require('express');
const {jobController} = require("../controllers");
const router = express.Router();

router.get('/unpaid', jobController.getUnpaidJobsForUser);

router.post('/:job_id/pay', jobController.payForJob);

module.exports = router;