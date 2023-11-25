// class Game {
//     constructor(id, title, description, price, quantity) {
//         this.id = id;
//         this.title = title;
//         this.description = description;
//         this.price = price;
//         this.quantity = quantity;
//     }
// }

// export default Game;

import { Schema, model } from "mongoose";

const gameSchema = new Schema(
    {
        title: String,
        description: String,
        price: {
            type: Number,
            required: true
        },
        quantity: Number
    },
    {
        timestamps: true
    }
);

const Game = model('game', gameSchema);

export default Game;

// ou bien

// export default class Game { ... } 