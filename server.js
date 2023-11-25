import express from "express";
import mongoose from "mongoose";
import gameRoutes from "./routes/game.route.js";
import userRoutes from "./routes/user.route.js";

const server = express();

const port = process.env.PORT || 9090;
const hostname = "127.0.0.1";

server.use(express.json());


mongoose.connect("mongodb://localhost:27017/databaseName", { family: 4 })
        .then(()=>{
            console.log("database connected");
        })
        .catch((exception)=>{
            console.log(exception);
        })


server.use("/game", gameRoutes);
server.use("/user", userRoutes);


server.listen(port, hostname, function () {
    console.log(`server running on http://${hostname}:${port}`);
});