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
        res.status(500)
            .json({ Error: 'Error in fetching most paying profession details. Error: ' + e.message});
    }
});

const getMostPayingClients = catchAsync(async (req, res, next) => {
    try {
        const mostPayingClient = await adminService.getMostPayingClient(
            req.query.start,
            req.query.end,
            req.query.limit || 2
        );
        res.json(mostPayingClient)
        return next();
    } catch (e) {
        console.log(`Error in fetching most paying client details. Error: `, e);
        res.status(500)
            .json({ Error: 'Error in fetching most paying client details. Error: ' + e.message});
    }
});

module.exports = {
    getMostPayingProfession,
    getMostPayingClients
};