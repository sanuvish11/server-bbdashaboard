const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/auth/signup", [verifySignUp.checkDuplicateUsernameOrEmail,
        verifySignUp.checkRolesExisted
    ], controller.signup);
    app.post("/api/auth/search", controller.search);
    app.post("/api/auth/signin", controller.signin);

    app.post("/api/auth/update", controller.update);
    app.post("/api/auth/chat", controller.chat_history);

    app.post("/api/auth/roompar", controller.room_participant);
    app.get("/api/auth/roomdetails", controller.getroomdetails);

    app.post("/api/auth/schedule", controller.chat_scheduler);
    app.post("/api/auth/schedulesearch", controller.schedule_search);

    app.post("/api/auth/chatdetail", controller.getchatdetails);
    app.get("/api/auth/chatd", controller.getchatdetail);

    app.get("/api/auth/getTestaments", controller.getTestaments);
    app.post("/api/auth/getChapters", controller.getChapters);

    app.post("/api/auth/getVerses", controller.getVerses);
    app.post("/api/auth/fetchBibleData", controller.fetchBibleData);

    app.post("/api/auth/getcountry", controller.getCounty)
    app.post("/api/auth/getstate", controller.getState)
    app.post("/api/auth/getcity", controller.getCity)
};