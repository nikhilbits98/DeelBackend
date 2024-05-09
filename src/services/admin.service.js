const { jobRepository} = require("../repository");

const getMostPayingProfession = async(startDate, endDate) => {
    return await jobRepository.getMostPayingProfession(startDate, endDate);
}

const getMostPayingClient = async(startDate, endDate) => {

}

module.exports = {
    getMostPayingProfession,
    getMostPayingClient
}