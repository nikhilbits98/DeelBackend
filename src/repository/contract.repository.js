const {Contract} = require("../model");

const getContractById = async(contractId) => {
    return await Contract.findOne({
        where:{
            id: contractId
        }
    });
}

module.exports = {
    getContractById
}