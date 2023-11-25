import { Router } from "express";
import { acheter, createGame, deleteGameById, getAllGames, getGameByDate } from "../controller/game.controller.js";

const router = Router();

/**
 * @Route prerfix
 * /game
 */

router.route("/")
    .get(getAllGames)
    .post(createGame);
router.post("/acheter/:idUser/:idGame",acheter);
router.delete("/:id", deleteGameById);
router.get("/:date", getGameByDate);

// GET /test?search=aa&order=xx
// router.get("/test", function (req, res) {
//     const search = req.query.search;
//     const order = req.query.order;
//     console.log(search)
//     console.log(order)

//     res.status(200).end("Welcome to test");
// });

// router.get("/test/:search/:order", function (req, res) {
//     const search = req.params.search;
//     const order = req.params.order;
//     const objectToSend = {
//         search_param: search,
//         order_param: order
//     };
//     res.status(200).json(objectToSend);
// });

export default router;