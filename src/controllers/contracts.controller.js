const catchAsync = require('../utils/catchAsync');
const {contractService} = require("../services");

const getContractByIdForUser = catchAsync(async (req, res, next) => {
    try {
        const {profile} = req;
        const contractDetails = await contractService.getContractByIdForUser(
            req.params.id,profile
        );
        res.json(contractDetails)
        return next();
    } catch (e) {
        console.log(`Error in fetching contract details. Error: `, e);
    }
});

const getAllNonTerminatedContractsForUser = catchAsync(async (req, res, next) => {
    try {
        return next();
    } catch (e) {
        console.log(`Error in fetching contract details. Error: `, e);
    }
});

module.exports = {
    getContractByIdForUser,
    getAllNonTerminatedContractsForUser
};