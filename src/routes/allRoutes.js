import express from "express";
import blogsRoute from "./blogsRoute.js";
import registerRoute from './registerRoute.js';
import loginRoute from "./loginRoute.js";
import cmntRoute from "./cmntRoute.js";
import querryRoute from "./querryRoute.js";
import portfolioRoute from "./portfolioRoute.js";

const router = express.Router()

router.use("/blogs", blogsRoute)
router.use("/register", registerRoute)
router.use("/login", loginRoute)
router.use("/comments", cmntRoute)
router.use("/querries", querryRoute)
router.use("/portfolio", portfolioRoute)




export default router; 