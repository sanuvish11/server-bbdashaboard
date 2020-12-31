module.exports = {
    HOST: "bbshborad.c27swtyzqmgm.us-east-2.rds.amazonaws.com",
    // HOST: "localhost",
    USER: "root",
    PASSWORD: "root1234",
    //PASSWORD: "root",

    DB: "bbashboard",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};