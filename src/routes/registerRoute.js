import express from 'express';
import registerController from '../controllers/registerController.js';

const router = express.Router()

// defined route
router.post('/', registerController)




export default router;