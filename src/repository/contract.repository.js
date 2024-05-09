const {Contract} = require("../model");
const {Op} = require("sequelize");

const getContractById = async(contractId) => {
    return await Contract.findOne({
        where:{
            id: contractId
        }
    });
}

const getAllContractByProfileIdAndStatusIn = async(profileId, statusList) => {
    return await Contract.findAll({
        where:{
            status: {
                [Op.in]: statusList
            },
            [Op.or]: [
                {ClientId: profileId},
                {ContractorId: profileId}
            ]
        }
    });
}

module.exports = {
    getContractById,
    getAllContractByProfileIdAndStatusIn
}