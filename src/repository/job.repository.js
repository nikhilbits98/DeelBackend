const {Job, Contract, Profile, sequelize} = require("../model");
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

const getMostPayingProfession = async (startDate, endDate) => {
    return await Job.findAll({
        attributes: [
            [sequelize.col('Contract.Contractor.profession'), 'profession'],
            [sequelize.fn('SUM', sequelize.col('price')), 'total']
        ],
        where: {
            paymentDate: {
                [Op.gte]: startDate,
                [Op.lte]: endDate
            },
            paid: true
        },
        include: [{
            model: Contract,
            required: true,
            attributes: [],
            include:[{
                model: Profile,
                as: 'Contractor',
                required: true,
                attributes: ['profession']
            }]
        }],
        group: ['Contract.Contractor.profession'],
        order: [[sequelize.col('total'), 'DESC']],
        limit: 1,
    });
}

const getMostPayingClients = async (startDate, endDate, limit) => {
    return await Job.findAll({
        attributes: [
            [sequelize.col('Contract.Client.id'), 'clientId'],
            [sequelize.col('Contract.Client.firstName'), 'firstName'],
            [sequelize.col('Contract.Client.lastName'), 'lastName'],
            [sequelize.col('Contract.Client.profession'), 'profession'],
            [sequelize.fn('SUM', sequelize.col('price')), 'total']
        ],
        where: {
            paymentDate: {
                [Op.gte]: startDate,
                [Op.lte]: endDate
            },
            paid: true
        },
        include: [{
            model: Contract,
            required: true,
            attributes: [],
            include:[{
                model: Profile,
                as: 'Client',
                required: true,
                where: {
                    type: 'client'
                },

            }]
        }],
        group: ['Contract.Client.id'],
        order: [[sequelize.col('total'), 'DESC']],
        limit: limit,
    });
}

module.exports = {
    getUnpaidJobsByProfileIdAndContractStatus,
    getMostPayingProfession,
    getMostPayingClients
}