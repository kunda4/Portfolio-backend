import express from 'express';
import cmntController from '../controllers/cmntController.js';
import verifyisAdmin from '../middleware/verifyisAdmin.js';

const router = express.Router()

// defined route
router.post('/comments',verifyisAdmin, cmntController.createCmnt)
router.get('/comments', cmntController.getCmnt)
router.get('/comments-get/:id', cmntController.getoneCmnt)
router.delete('/comments-delete/:id',  cmntController.deleteCmnt)



export default router;