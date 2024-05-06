// healthAndMedicalInfoRoutes.js
import express from 'express';
import {addHealthAndMedicalInfo,  getAllHealthAndMedicalInfo,  getHealthAndMedicalInfoById,  updateHealthAndMedicalInfo,  deleteHealthAndMedicalInfo} from '../controllers/healthdetails.js';

const router = express.Router();

router.post('/healthandmedicalinfo', addHealthAndMedicalInfo);
router.get('/healthandmedicalinfo', getAllHealthAndMedicalInfo);
router.get('/healthandmedicalinfo/:id', getHealthAndMedicalInfoById);
router.put('/healthandmedicalinfo/:id', updateHealthAndMedicalInfo);
router.delete('/healthandmedicalinfo/:id', deleteHealthAndMedicalInfo);

export default router;