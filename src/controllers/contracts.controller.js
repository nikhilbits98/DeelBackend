const catchAsync = require('../utils/catchAsync');
const {contractService} = require("../services");

const getContractById = catchAsync(async (req, res, next) => {
    try {
        const {profile} = req;
        const contractDetails = await contractService.getContractById(
            req.params.id, profile.id
        );
        res.json(contractDetails)
        return next();
    } catch (e) {
        console.log(`Error in fetching contract details by id. Error: `, e);
        res.status(500)
            .json({ Error: 'Error in fetching contract details by id. Error: ' + e.message});
    }
});

const getAllNonTerminatedContracts = catchAsync(async (req, res, next) => {
    try {
        const {profile} = req;
        const allNonTerminatedContracts = await contractService.getAllNonTerminatedContracts(
            profile.id
        );
        res.json(allNonTerminatedContracts)
        return next();
    } catch (e) {
        console.log(`Error in fetching all active contract details. Error: `, e);
        res.status(500)
            .json({ Error: 'Error in fetching all active contract details. Error: ' + e.message});
    }
});

module.exports = {
    getContractById,
    getAllNonTerminatedContracts
};