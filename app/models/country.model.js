module.exports = (sequelize, Sequelize) => {
    const Country = sequelize.define("countries", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        country_name: {
            type: Sequelize.STRING
        }
    });
    return Country;
};