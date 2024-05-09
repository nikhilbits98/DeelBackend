const {jobRepository, profileRepository} = require("../repository");
const {contractStatusConstant, profileTypeConstant} = require("../constants");
const transaction = require("../utils/transaction");

const depositBalance = async(clientId, amount) => {
    await transaction(async (txn) => {
        const clientProfile = await profileRepository.getProfileByIdWithTransaction(clientId,txn);
        if(!clientProfile){
            throw new Error(`Client not found for user id.`);
        }
        console.log(`Client Profile: ${JSON.stringify(clientProfile)}`);
        if(clientProfile.type !== 'client'){
            throw new Error(`Deposit Balance allowed for client profiles only.`);
        }
        const allUnpaidJobs = await jobRepository.getUnpaidJobsByProfileIdAndContractStatus(
            clientId,contractStatusConstant.IN_PROGRESS_CONTRACT_STATUS
        )
        const totalUnpaidAmount = allUnpaidJobs.map(job => job.price).reduce((sum, val) => sum + val, 0);
        console.log(`Total unpaid amount: ${JSON.stringify(totalUnpaidAmount)}`);
        if(amount > (totalUnpaidAmount/4)){
            throw new Error(`Very large amount requested. Add smaller amount.`)
        }
        await profileRepository.addBalanceToProfile(
            clientId, profileTypeConstant.CLIENT_PROFILE_TYPE, amount,txn);
    });
}

module.exports = {
    depositBalance
}