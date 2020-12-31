module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        email: {
            isEmail: true,
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        first_name: {
            type: Sequelize.STRING
        },
        middle_name: {
            type: Sequelize.STRING
        },
        last_name: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        state: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        yob: {
            type: Sequelize.STRING
        },
        time_zone: {
            type: Sequelize.STRING
        },
        church_name: {
            type: Sequelize.STRING
        },
        paster_name: {
            type: Sequelize.STRING
        },
        phone_no: {
            type: Sequelize.STRING
        },
        church_city: {
            type: Sequelize.STRING
        },
        church_state: {
            type: Sequelize.STRING
        },
        created_by: {
            type: Sequelize.STRING
        },
        modify_by: {
            type: Sequelize.STRING
        },
        u_id: {
            type: Sequelize.STRING
        },
        // IF FATHER TURN OFF HIS ACCOUNT ( INITIAL 1 AT THE TIME OF NEW RECORD CREATION )
        id_is_Active: {
            type: Sequelize.INTEGER
        },
        // IF SUPER ADMIN RESTRICTS A FATHER ( INITIAL 0 AT THE TIME OF NEW RECORD CREATION )
        restricted: {
            type: Sequelize.INTEGER
        }

    });

    return User;
};