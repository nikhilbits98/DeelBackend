const {contractRepository} = require("../repository");

const getContractByIdForUser = async(contractId, profileId) => {
    const contract = await contractRepository.getContractById(contractId);
    if(!contract){
        throw new Error(`Contract doesn't exist.`);
    }
    if(contract.ClientId !== profileId && contract.ContractorId !== profileId){
        throw new Error(`Unauthorised Contract access request.`);
    }
    return contract;
}

const getAllNonTerminatedContractsForUser = async(profileId) => {
    // TODO: Make constant for this enum.
    return await contractRepository.getAllContractByProfileIdAndStatusIn(
        profileId,
        ['new', 'in_progress']
    );
}

module.exports = {
    getContractByIdForUser,
    getAllNonTerminatedContractsForUser
}