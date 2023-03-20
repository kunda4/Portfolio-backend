import express from 'express';
import verifyisAdmin from "../middleware/verifyisAdmin.js";
import blogsController from '../controllers/blogsController.js';


const router = express.Router()

// defined blogs route
router.post('/blogs',  blogsController.createBlog, 
function(req, res) {
    var token = req.headers.authorization;
    if (!token) {
      res.status(401).send('Unauthorized');
    } else {
      // Verify the bearer token and create the blog post
    }
  } );
router.get('/blogs', blogsController.getBlog)
router.get('/blogs/get/:id', blogsController.getoneBlog)
router.put('/blogs/update/:id',   blogsController.updateBlog)
router.delete('/blogs/delete/:id',  blogsController.deleteBlog)


export default router;