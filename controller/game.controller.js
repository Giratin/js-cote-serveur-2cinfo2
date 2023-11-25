import Game from "../models/game.model.js";

// var games = [new Game(1, "GTA 5", "this is a description", 20, 1), new Game(2, "DMC5", "this is a description", 30, 2), new Game(3, "PS6", "this is a description", 20, 1)];

//[1,2,3].push(4) => [1,2,3,4]
//[1,2,3].unshift(4) => [4,1,2,3]

//[1,2,3].pop() => [1,2]
//[1,2,3].shift() => [2,3]

// export default function createGame(req,res){}

const createGame = (req, res) => {
    const { title, description, quantity, price } = req.body;

    const game = new Game({ title, description, quantity, price });

    game.save()
        .then((doc)=>{
            res.json(doc)
        })
        .catch((exc)=>{
            res.status(400).json({ exc })
        })
}
const acheter = (req, res) => {
    const { idUser, idGame} =req.params
}

const getAllGames = async (req, res) => {
    try{
        const games = await Game.find();
        console.log(games);
        res.json(games);
    }catch(exc){
        res.status(404).json(exc)
    }
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
    acheter
}
// ou bien
// export const getGameByDate = (req, res) => { }