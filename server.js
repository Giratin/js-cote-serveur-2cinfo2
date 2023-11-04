import express from "express";

const server = express();

const port = process.env.PORT || 9090;
const hostname = "127.0.0.1";

class Game {
    constructor(id, name, year) {
        this.id = id;
        this.name = name;
        this.year = year;
    }
}
const game1 = new Game(1, "GTA 5", 2020);
const game2 = new Game(2, "DMC5", 2019);
const game3 = new Game(3, "PS6", 2020);

var table = [];
table.push(game1);
table.push(game2);
table.push(game3);


server.get("/games", (req, res) => {
    res.json(table);
})

server.delete("/game/:id", function (req, res) {
    const id = req.params.id;
    table = table.filter(function(el){
        return el.id != id;
    });
    res.json(table);
});

server.get("/game/:date", (req, res) => {
    const date = req.params.date;
    let tabelToReturn = [];

    for (var i = 0; i < table.length; i++) {
        if (table[i].year == date) {
            tabelToReturn.push(table[i]);
        }
    }

    if (tabelToReturn.length == 0) {
        return res.status(404).end("Not Found");
    }

    res.json(tabelToReturn);
});



server.get("/test", function (req, res) {
    const search = req.query.search;
    const order = req.query.order;
    console.log(search)
    console.log(order)

    res.status(200).end("Welcome to test");
});


server.get("/test/:search/:order", function (req, res) {

    const search = req.params.search;
    const order = req.params.order;

    const objectToSend = {
        search_param: search,
        order_param: order
    }

    res.status(200).json(objectToSend);
});

server.listen(port, hostname, function () {
    console.log(`server running on http://${hostname}:${port}`);
});