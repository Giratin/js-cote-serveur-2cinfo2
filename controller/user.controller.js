import { isValidObjectId } from "mongoose";
import User from "../models/user.model.js";


const findById = (id) => {
    return users.findIndex((el) => {
        return el.id == id;
    })
}

export const createUser = async (req, res) => {

    const { username, password, wallet } = req.body;
    const user = new User({ username, password, wallet });
    try {
        await user.save();

        res.status(200).json({
            isSuccess: true,
            user
        });
    } catch (e) {
        res.status(400).json({ e })
    }
}
export const findUserById = async (req, res) => {
    const { id } = req.params;

    if(!isValidObjectId(id)){
        return res.json({message: "ObjectId is not valid"})
    }

    const user = await User.findById(id);

    if(!user){
        return res.status(404).json({
            message: "user not found"
        })
    }
    res.status(200).json({
        isSuccess: true,
        user
    });
   
}


export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { username, password, wallet } = req.body;
if (!isValidObjectId(id))
{
    return res.json(
        {
            message: "id not valid"
        }
    )
}

    
const userUpdated= await User.findByIdAndUpdate(id, { username, password, wallet }, {new: true} )
res.json(
    userUpdated
)
}