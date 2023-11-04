import Game from "../models/game.model.js";

var games = [new Game(1, "GTA 5", 2020), new Game(2, "DMC5", 2019), new Game(3, "PS6", 2020)];

//[1,2,3].push(4) => [1,2,3,4]
//[1,2,3].unshift(4) => [4,1,2,3]

//[1,2,3].pop() => [1,2]
//[1,2,3].shift() => [2,3]

// export default function createGame(req,res){}

const createGame = (req, res) => {
    const name = req.body.name;
    const year = req.body.year;

    let id = 1;

    if (games.length == 0) {
        id = 1;
    } else {
        const lastId = games[games.length - 1].id;
        id = lastId + 1;
    }

    const game = new Game(id, name, year);
    games.push(game);

    res.status(201).json({
        created: true,
        game: game
    });
}

const getAllGames = (req, res) => {
    res.json(games);
}

const deleteGameById = (req, res) => {
    const id = req.params.id;
    games = games.filter(function (el) {
        return el.id != id;
    });
    res.json(games);
}

const getGameByDate = (req, res) => {
    const date = req.params.date;
    let tableToReturn = [];
    for (var i = 0; i < games.length; i++) {
        if (games[i].year == date) {
            tableToReturn.push(games[i]);
        }
    }
    if (tableToReturn.length == 0) {
        return res.status(404).end("Not Found");
    }
    res.json(tableToReturn);
}

export {
    createGame,
    getAllGames,
    deleteGameById,
    getGameByDate,
}
// ou bien 
// export const getGameByDate = (req, res) => { }