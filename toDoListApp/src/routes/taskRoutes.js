import express from 'express';
import { createTask, getTask, updateTask, deleteTask } from '../controllers/taskController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();


router.post('/create', authMiddleware, createTask); 
router.get('/', authMiddleware, getTask);          
router.put('/:id', authMiddleware, updateTask);    
router.delete('/:id', authMiddleware, deleteTask); 

export default router;
