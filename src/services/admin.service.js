const { jobRepository} = require("../repository");

const getMostPayingProfession = async(startDate, endDate) => {
    return await jobRepository.getMostPayingProfession(startDate, endDate);
}

const getMostPayingClient = async(startDate, endDate, limit) => {
    return await jobRepository.getMostPayingClients(startDate,endDate,limit);
}

module.exports = {
    getMostPayingProfession,
    getMostPayingClient
}