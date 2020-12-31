var app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
var http = require("http").createServer(app);
var io = require("socket.io")(http);
const db1 = require("./app/models");
const Chat = db1.chat;
const config = require("./app/config/auth.config");
const RoomParticipant = db1.roomparticipant;
const { joinUser, removeUser, findUser } = require('./app/controllers/users');
let thisRoom = "";

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
    // console.log("connected");
    socket.on("join room", (data) => {
        console.log('in room');
        let Newuser = joinUser(socket.id, data.username, data.roomName)
        socket.emit('send data', { id: socket.id, username: Newuser.username, roomname: Newuser.roomname });

        thisRoom = Newuser.roomname;
        console.log(Newuser.username);
        socket.join(Newuser.roomname);

        RoomParticipant.create({

            USER_NAME: Newuser.username,
            ROOM_ID: Newuser.roomname,
            PASTER_ID: Newuser.username,

        }).then(roomparticipant => {
            // res.send(roomparticipant);
        });

    })

    socket.on("typing", (user) => {
        console.log("typing");
        io.to(thisRoom).emit("typing", { username: user });
    });

    //new update




    socket.on("stoptyping", (user) => {
        console.log(user);

        io.to(thisRoom).emit("stoptyping", { username: user });
    });


    socket.on("chat message", (data) => {
        io.to(thisRoom).emit("chat message", { data: data, id: socket.id });
        console.log(data)
        Chat.create({
            ROOM_ID_FK: data.room,
            message: data.msg,
            sender_id: data.sender,
            SENDER_TYPE: data.sender_id,
            date_time: Date.now(),
            status: data.status
        });
    });
    socket.on("disconnect", () => {
        const user = removeUser(socket.id);
        console.log(user);
        if (user) {
            console.log(user.username + ' has left');
        }
        console.log("disconnected");
    });
});


var corsOptions = {
    origin: "*",
    corsOptions: 200
};
app.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept",
        "Access-Control-Allow-Methods →GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS",
        "image/jpeg"

    );
    next();
});

global.__basedir = __dirname;
app.use(cors(corsOptions));
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
require('./app/routes/auth.routes')(app);

const PORT = process.env.PORT || 8080;
http.listen(PORT, function() {});