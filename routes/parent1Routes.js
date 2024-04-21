// parents1Routes.js
import express from 'express';
import { getAllParents, createParent, updateParent, deleteParent } from '../controllers/parent1details.js'; // Adjust the path as necessary

const router = express.Router();

// Routes for parent operations
router.get('/parents', getAllParents);
router.post('/parent', createParent);
router.put('/parent/:id', updateParent);
router.delete('/parent/:id', deleteParent);

export default router;