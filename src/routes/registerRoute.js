import express from 'express';
import {registerController,  getUser, updateUser, deleteUser, getoneUser} from '../controllers/registerController.js';


const router = express.Router()

// defined route
router.post('/register', registerController)
router.get('/users', getUser)
router.get('/users-get/:id', getoneUser)
router.put('/users-update/:id', updateUser)
router.delete('/users-delete/:id', deleteUser)




export default router;