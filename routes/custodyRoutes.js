import express from 'express';
import { getCustodyDetails, registerCustody, updateCustodyDetails, deleteCustody } from '../controllers/custodydetails.js'; // Adjust the path as necessary

const router = express.Router();

// Route to register a new custody arrangement
router.post('/custody', registerCustody);

// Route to get custody details by ID
router.get('/custody/:id', getCustodyDetails);

// Route to update custody details by ID
router.put('/custody/:id', updateCustodyDetails);

// Route to delete a custody arrangement by ID
router.delete('/custody/:id', deleteCustody);

export default router;