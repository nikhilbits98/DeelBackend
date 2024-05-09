const catchAsync = require('../utils/catchAsync');
const {jobService} = require("../services");

const getUnpaidJobs = catchAsync(async (req, res, next) => {
    try {
        const {profile} = req;
        const allUnpaidJobs = await jobService.getUnpaidJobs(profile.id);
        res.json(allUnpaidJobs)
        return next();
    } catch (e) {
        console.log(`Error in fetching Unpaid Job details. Error: `, e);
        res.status(500)
            .json({ Error: 'Error in fetching Unpaid Job details. Error: ' + e.message});
    }
});

const payForJob = catchAsync(async (req, res, next) => {
    try {
        const {profile} = req;
        const contractDetails = await jobService.payForJob(
            req.params.jobId,
            profile.id
        );
        res.json(contractDetails)
        return next();
    } catch (e) {
        console.log(`Error in making payment for a job. Error: `, e);
        res.status(500)
            .json({ Error: 'Error in making payment for a job. Error: ' + e.message});
    }
});

module.exports = {
    getUnpaidJobs,
    payForJob
};