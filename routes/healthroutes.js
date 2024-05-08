// healthAndMedicalInfoRoutes.js
import express from 'express';
import {
  addHealthAndMedicalInfo,
  getAllHealthAndMedicalInfo,
  getHealthAndMedicalInfoById,
  updateHealthAndMedicalInfo,
  deleteHealthAndMedicalInfo
} from '../controllers/healthAndMedicalInfoController.js';

const router = express.Router();

router.post('/HealthAndMedicalInfo', addHealthAndMedicalInfo);
router.get('/HealthAndMedicalInfo', getAllHealthAndMedicalInfo);
router.get('/HealthAndMedicalInfo/:id', getHealthAndMedicalInfoById);
router.put('/HealthAndMedicalInfo/:id', updateHealthAndMedicalInfo);
router.delete('/HealthAndMedicalInfo/:id', deleteHealthAndMedicalInfo);

export default router;