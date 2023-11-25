/*class User {
    constructor( username, password, wallet) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.wallet = wallet;
    }
}

export default User;*/

import { Schema, model } from 'mongoose'

const user = new Schema ({
    username : String,
    password : String,
    wallet : Number
}, {timestamps : true});


export default model (
    'user', user
)

