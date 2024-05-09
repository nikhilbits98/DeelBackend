const catchAsync = require('../utils/catchAsync');

const getMostPayingProfession = catchAsync(async (req, res, next) => {
    try {
        return next();
    } catch (e) {
        console.log(`Error in fetching most paying profession details. Error: `, e);
    }
});

const getMostPayingClients = catchAsync(async (req, res, next) => {
    try {
        return next();
    } catch (e) {
        console.log(`Error in fetching most paying client details. Error: `, e);
    }
});

module.exports = {
    getMostPayingProfession,
    getMostPayingClients
};