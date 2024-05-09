const catchAsync = require('../utils/catchAsync');

const getUnpaidJobsForUser = catchAsync(async (req, res, next) => {
    try {
        return next();
    } catch (e) {
        console.log(`Error in fetching Unpaid Job details. Error: `, e);
    }
});

const payForJob = catchAsync(async (req, res, next) => {
    try {
        return next();
    } catch (e) {
        console.log(`Error in making payment for a job. Error: `, e);
    }
});

module.exports = {
    getUnpaidJobsForUser,
    payForJob
};