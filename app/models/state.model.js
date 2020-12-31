module.exports = (sequelize, Sequelize) => {
    const State = sequelize.define("states", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        country_id: {
            type: Sequelize.INTEGER
        },
        state_name: {
            type: Sequelize.STRING
        }
    });
    return State;
};