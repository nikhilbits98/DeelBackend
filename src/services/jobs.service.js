const {jobRepository} = require("../repository");
const {contractStatusConstant} = require("../constants");

const getUnpaidJobs = async(profileId) => {
    return await jobRepository.getUnpaidJobsByProfileIdAndContractStatus(
        profileId,contractStatusConstant.IN_PROGRESS_CONTRACT_STATUS);
}

const payForJob = async(jobId, profileId) => {

}

module.exports = {
    getUnpaidJobs,
    payForJob
}