const { Profile, sequelize} = require("../model");

const getProfileById = async(profileId) => {
    return await Profile.findOne({
        where:{
            id: profileId
        }
    });
}

const getProfileByIdWithTransaction = async(profileId, txn) => {
    return await Profile.findOne({
        where:{
            id: profileId
        },
        transaction: txn
    });
}

const addBalanceToProfile = async (profileId, type, amount, txn) => {
    await Profile.update({ balance: sequelize.literal(`balance + ${amount}`),}, {
        where: {
            id: profileId,
            type: type
        },
        transaction: txn
    });
}

const deductBalanceFromProfile = async (profileId, type, amount, txn) => {
    await Profile.update({ balance: sequelize.literal(`balance - ${amount}`),}, {
        where: {
            id: profileId,
            type: type
        },
        transaction: txn
    });
}

module.exports = {
    getProfileById,
    getProfileByIdWithTransaction,
    addBalanceToProfile,
    deductBalanceFromProfile
}