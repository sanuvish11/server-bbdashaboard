

module.exports = (sequelize, Sequelize) => {
    const Chat = sequelize.define("chat_histries", {
        chat_id: {
            type: Sequelize.STRING
        },
        sender_id: {
            type: Sequelize.STRING
        },
        message: {
            type: Sequelize.STRING
        },
        date_time: {
            type: Sequelize.STRING
        },
        ROOM_ID_FK: {
            type: Sequelize.STRING
        },
        SENDER_TYPE: {
            type: Sequelize.INTEGER
        },
        status: {
            type: Sequelize.STRING
        },
        created_by: {
            type: Sequelize.STRING
        },
        modify_by: {
            type: Sequelize.STRING
        },
    });

    return Chat;
};
