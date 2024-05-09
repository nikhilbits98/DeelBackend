const {sequelize} = require("../model");

const transaction = async(func) => {

    let connection = await sequelize.transaction();
    try {
        let res = await func(connection);
        await connection.commit();
        return res;
    } catch (e) {
        await connection.rollback();
        throw e;
    }
}

module.exports = transaction;