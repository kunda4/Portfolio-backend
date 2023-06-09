import express from 'express';
import verifyisAdmin from "../middleware/verifyisAdmin.js";
import blogsController from '../controllers/blogsController.js';


const router = express.Router()

// defined blogs route
router.post('/blogs', verifyisAdmin, blogsController.createBlog)
router.get('/blogs', blogsController.getBlog)
router.get('/blogs/get/:id', blogsController.getoneBlog)
router.put('/blogs/update/:id', verifyisAdmin, blogsController.updateBlog)
router.delete('/blogs/delete/:id', verifyisAdmin,  blogsController.deleteBlog)


export default router;