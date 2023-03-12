import express from 'express';
import loginController from '../controllers/loginController.js';

const router = express.Router()

// defined route
router.post('/', loginController)




export default router;