import express from 'express';
import {
  createEducator,
  getAllEducators,
  getEducatorById,
  updateEducator,
  deleteEducator
} from '../controllers/educatorDetails.js';

const router = express.Router();

// Route to create a new educator
router.post('/educators', createEducator);

// Route to get all educators
router.get('/educators', getAllEducators);

// Route to get an educator by ID
router.get('/educators/:id', getEducatorById);

// Route to update an educator by ID
router.patch('/educators/:id', updateEducator);

// Route to delete an educator by ID
router.delete('/educators/:id', deleteEducator);

export default router;