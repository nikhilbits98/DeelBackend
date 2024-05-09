const {Job, Contract} = require("../model");
const {Op} = require("sequelize");

const getUnpaidJobsByProfileIdAndContractStatus = async(profileId, contractStatus) => {
    return await Job.findAll({
        include: [
            {
                attributes: [],
                model: Contract,
                required: true,
                where: {
                    status: contractStatus,
                    [Op.or]: [
                        { ContractorId: profileId },
                        { ClientId: profileId }
                    ]
                },
            },
        ],
        where: {
            paid: {
                [Op.not]: true
            }

        },
    });
}


module.exports = {
    getUnpaidJobsByProfileIdAndContractStatus,
}