const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD, {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,

        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.chat = require("../models/chat.model.js")(sequelize, Sequelize);
db.chat_schedule = require("../models/chat.scheduler.model")(sequelize, Sequelize);
db.roomparticipant = require("../models/room.participentes.model")(sequelize, Sequelize);
db.country = require("../models/country.model")(sequelize, Sequelize);
db.state = require("../models/state.model")(sequelize, Sequelize);
db.city = require("../models/city.model")(sequelize, Sequelize);
db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});
// db.roomparticipant.hasMany(db.chat, {
//     foreignKey: "ROOM_ID",
// });
// db.chat.belongsTo(db.roomparticipant, {
//     foreignKey: "ROOM_ID_FK",
// });

// db.roomparticipant.belongsTo(db.chat, { targetKey: 'ROOM_ID_FK', foreignKey: 'ROOM_ID' });


// User.hasMany(Post, { foreignKey: 'user_id' })
// Post.belongsTo(User, { foreignKey: 'user_id' })

// Post.find({ where: {... }, include: [User] })
// db.ROLES = ["admin"];

module.exports = db;