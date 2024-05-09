const catchAsync = require('../utils/catchAsync');
const { clientService} = require("../services");

const depositBalanceForClient = catchAsync(async (req, res, next) => {
    try {
        await clientService.depositBalance(req.params.userId,req.body.amount);
        res.json("Successfully Added balance.");
        return next();
    } catch (e) {
        console.log(`Error in depositing balance for client. Error: `, e);
    }
});

module.exports = {
    depositBalanceForClient,
};