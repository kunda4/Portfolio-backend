import express from "express";
import booksRoute from "./booksRoute.js"
import registerRoute from './registerRoute.js'
import loginRoute from "./loginRoute.js"

const router = express.Router()

router.use("/blogs", booksRoute)
router.use("/register", registerRoute)
router.use("/login", loginRoute)


export default router; 