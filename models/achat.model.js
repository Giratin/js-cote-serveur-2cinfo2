import {Schema, model} from 'mongoose';

const achatSchema = new Schema ({
    boughdate : Date,
    idUser : {
        type : Schema.Types.ObjectId,
        ref : 'user',
    },
    idGame: {
        type : Schema.Types.ObjectId,
        ref : 'game',
    }
})

export default model ('achat', achatSchema);