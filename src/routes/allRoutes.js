import express from "express";
import blogsRoute from "./blogsRoute.js";
import registerRoute from './registerRoute.js';
import loginRoute from "./loginRoute.js";
import cmntRoute from "./cmntRoute.js";
import querryRoute from "./querryRoute.js";
import portfolioRoute from "./portfolioRoute.js";
import getUser from "./registerRoute.js";
import getoneUser from "./registerRoute.js";
import updateUser from "./registerRoute.js";
import deleteUser from "./registerRoute.js";

const router = express.Router()

router.use("/blogs", blogsRoute)
router.use("/register", registerRoute)
router.use("/login", loginRoute)
router.use("/comments", cmntRoute)
router.use("/querries", querryRoute)
router.use("/portfolio", portfolioRoute)
router.use("/users", getUser)
router.use("/users-get", getoneUser)
router.use("/users", updateUser)
router.use("/users", deleteUser)




export default router; 