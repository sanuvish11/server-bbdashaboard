module.exports = (sequelize, Sequelize) => {
    const City = sequelize.define("cities", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        state_id: {
            type: Sequelize.INTEGER
        },
        city_name: {
            type: Sequelize.STRING
        }
    });
    return City;
};