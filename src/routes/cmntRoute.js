import express from 'express';
import cmntController from '../controllers/cmntController.js';
import verifyisAdmin from '../middleware/verifyisAdmin.js';

const router = express.Router()

// defined route
router.post('/comments', cmntController.createCmnt)
router.get('/comments', cmntController.getCmnt)
router.get('/comments/:id', cmntController.getoneCmnt)
router.delete('/comments/:id', verifyisAdmin, cmntController.deleteCmnt)



export default router;