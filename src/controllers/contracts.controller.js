const catchAsync = require('../utils/catchAsync');

const getContractById = catchAsync(async (req, res, next) => {
    try {
        const {Contract} = req.app.get('models')
        const {id} = req.params
        const contract = await Contract.findOne({where: {id}})
        if(!contract) return res.status(404).end()
        res.json(contract)
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
    getContractById,
    getAllNonTerminatedContractsForUser
};