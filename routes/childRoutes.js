import express from 'express';
import { registerChild, getChildDetails, updateChildDetails, deleteChild } from '../controllers/childDetails.js'; // Adjust the path as necessary

const router = express.Router();

// Route to register a new child
router.post('/child', registerChild);

// Route to get child details by ID
router.get('/child/:id', getChildDetails);

// Route to update child details by ID
router.put('/child/:id', updateChildDetails);

// Route to delete a child by ID
router.delete('/child/:id', deleteChild);

export default router;