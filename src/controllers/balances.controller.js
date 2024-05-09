const catchAsync = require('../utils/catchAsync');

const depositBalanceForClient = catchAsync(async (req, res, next) => {
    try {
        return next();
    } catch (e) {
        console.log(`Error in depositing balance for client. Error: `, e);
    }
});

module.exports = {
    depositBalanceForClient,
};