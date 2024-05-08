// emergencyContactRoutes.js
import express from 'express';
import {addEmergencyContact, getAllEmergencyContacts, getEmergencyContactById, updateEmergencyContact, deleteEmergencyContact } from '../controllers/emergencyContactController.js'; // Adjust the import path as necessary

const router = express.Router();

router.post('/EmergencyContact', addEmergencyContact);
router.get('/EmergencyContact', getAllEmergencyContacts);
router.get('/EmergencyContact/:id', getEmergencyContactById);
router.put('/EmergencyContact/:id', updateEmergencyContact);
router.delete('/EmergencyContact/:id', deleteEmergencyContact);

export default router;