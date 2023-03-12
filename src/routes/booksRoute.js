import express from 'express';
import verifyisAdmin from "../middleware/verifyisAdmin.js";
import booksController from '../controllers/booksController.js';

const router = express.Router()

// defined route
router.post('/', verifyisAdmin, booksController.createBook )
router.get('/', booksController.getBook)
router.get('/:id', booksController.getoneBook)
router.put('/:id', verifyisAdmin,  booksController.updateBook)
router.delete('/:id', verifyisAdmin, booksController.deleteBook)


export default router;