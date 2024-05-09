const {jobRepository, profileRepository} = require("../repository");
const {contractStatusConstant, profileTypeConstant} = require("../constants");
const transaction = require("../utils/transaction");

const getUnpaidJobs = async(profileId) => {
    return await jobRepository.getUnpaidJobsByProfileIdAndContractStatus(
        profileId,contractStatusConstant.IN_PROGRESS_CONTRACT_STATUS);
}

const payForJob = async(jobId, profileId) => {
    await transaction(async (txn) => {
        const clientProfile = await profileRepository.getProfileByIdWithTransaction(profileId,txn);
        if(clientProfile.type !== 'client'){
            throw new Error(`Job Payment allowed by clients only.`);
        }
        const jobDetails = await jobRepository.getJobByIdWithTransaction(jobId,profileId,txn);
        console.log(`Job fetched: ${JSON.stringify(jobDetails)}`);
        if(!jobDetails){
            throw new Error(`Job not found with job id.`);
        }
        if(jobDetails.Contract.ClientId !== profileId){
            throw new Error(`Invalid transaction. Payment for self jobs allowed only.`);
        }
        if(jobDetails.paid == true){
            throw new Error(`Payment for Job is already done.`);
        }
        if(clientProfile.balance < jobDetails.price){
            throw new Error(`Insufficient Balance. Please recharge.`);
        }
        await jobRepository.markJobAsPaid(jobId, txn);
        await profileRepository.deductBalanceFromProfile(
            jobDetails.Contract.ClientId, profileTypeConstant.CLIENT_PROFILE_TYPE, jobDetails.price,txn);
        await profileRepository.addBalanceToProfile(
            jobDetails.Contract.ContractorId, profileTypeConstant.CONTRACTOR_PROFILE_TYPE, jobDetails.price,txn);
    });
}

module.exports = {
    getUnpaidJobs,
    payForJob
}