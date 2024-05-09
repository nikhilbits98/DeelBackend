const catchAsync = require('../utils/catchAsync');
const {adminService} = require("../services");

const getMostPayingProfession = catchAsync(async (req, res, next) => {
    try {
        const mostPayingProfession = await adminService.getMostPayingProfession(
            req.query.start,
            req.query.end
        );
        res.json(mostPayingProfession)
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