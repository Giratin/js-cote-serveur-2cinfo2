import express from "express";
import gameRoutes from "./routes/game.route.js";

const server = express();

const port = process.env.PORT || 9090;
const hostname = "127.0.0.1";

server.use(express.json());


server.use("/game", gameRoutes);


server.listen(port, hostname, function () {
    console.log(`server running on http://${hostname}:${port}`);
});