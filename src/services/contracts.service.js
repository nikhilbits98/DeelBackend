const {contractRepository} = require("../repository");

const getContractByIdForUser = async(contractId, profile) => {
    const contract = await contractRepository.getContractById(contractId);
    if(!contract){
        throw new Error(`Contract doesn't exist.`);
    }
    if(contract.ClientId !== profile.id && contract.ContractorId !== profile.id){
        throw new Error(`Unauthorised Contract access request.`);
    }
    return contract;
}

module.exports = {
    getContractByIdForUser
}