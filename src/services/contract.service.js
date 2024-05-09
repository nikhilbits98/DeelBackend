const {contractRepository} = require("../repository");
const {contractStatusConstant} = require("../constants");

const getContractById = async(contractId, profileId) => {
    const contract = await contractRepository.getContractById(contractId);
    if(!contract){
        throw new Error(`Contract doesn't exist.`);
    }
    if(contract.ClientId !== profileId && contract.ContractorId !== profileId){
        throw new Error(`Unauthorised Contract access request.`);
    }
    return contract;
}

const getAllNonTerminatedContracts = async(profileId) => {
    return await contractRepository.getAllContractByProfileIdAndStatusIn(
        profileId,
        contractStatusConstant.NON_TERMINATED_CONTRACT_STATUS_LIST
    );
}

module.exports = {
    getContractById,
    getAllNonTerminatedContracts
}