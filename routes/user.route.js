import {Router} from "express";
import { createUser, findUserById, updateUser } from "../controller/user.controller.js";

const router = Router();

router.post("/", createUser)
router.put("/:id", updateUser)
router.get("/:id", findUserById)


// router.post("/:userId/:gameId")


export default router;