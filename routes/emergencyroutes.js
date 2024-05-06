import express from 'express';
import {getAllEmergencyContacts, getEmergencyContactById, createEmergencyContact, updateEmergencyContact, deleteEmergencyContact} from '../controllers/emergencyDetails.js'; // Adjust the import path as necessary

const router = express.Router();

router.route('/emergencycontacts')
    .get(getAllEmergencyContacts)
    .post(createEmergencyContact);

router.route('/emergencycontacts/:id')
    .get(getEmergencyContactById)
    .put(updateEmergencyContact)
    .delete(deleteEmergencyContact);

export default router;