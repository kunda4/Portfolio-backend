import express from 'express';
import verifyisAdmin from "../middleware/verifyisAdmin.js";
import portfoliosController from '../controllers/portfolioController.js';


const router = express.Router()

// defined blogs route
router.post('/portfolio', verifyisAdmin,  portfoliosController.createPortfolio )
router.get('/portfolio', portfoliosController.getPortfolio)
router.get('/portfolio/:id', portfoliosController.getonePortfolio)
router.put('/portfolio/:id', verifyisAdmin,  portfoliosController.updatePortfolio)
router.delete('/portfolio/:id', verifyisAdmin, portfoliosController.deletePortfolio)


export default router;