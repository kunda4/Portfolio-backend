import express from 'express';
import querryController from '../controllers/querryController.js';
import verifyisAdmin from '../middleware/verifyisAdmin.js';

const router = express.Router()

// defined route
router.post('/querries', querryController.createQuerry)
router.get('/querries', querryController.getQuerry)
router.get('/querries/:id', querryController.getonequerry)
router.delete('/querries/:id', verifyisAdmin, querryController.deletequerry)



export default router;