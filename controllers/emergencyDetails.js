// emergencyContactController.js
import { EmergencyContact } from '../models/emergencycontact.js'; // Adjust the import path as necessary

// Add a new emergency contact
export const addEmergencyContact = async (req, res) => {
  try {
    const emergencyContact = new EmergencyContact(req.body);
    await emergencyContact.save();
    res.status(201).json(emergencyContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all emergency contacts
export const getAllEmergencyContacts = async (req, res) => {
  try {
    const emergencyContacts = await EmergencyContact.find();
    res.json(emergencyContacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get an emergency contact by ID
export const getEmergencyContactById = async (req, res) => {
  try {
    const emergencyContact = await EmergencyContact.findById(req.params.id);
    if (!emergencyContact) {
      return res.status(404).json({ message: 'Emergency contact not found' });
    }
    res.json(emergencyContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an emergency contact
export const updateEmergencyContact = async (req, res) => {
  try {
    const emergencyContact = await EmergencyContact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!emergencyContact) {
      return res.status(404).json({ message: 'Emergency contact not found' });
    }
    res.json(emergencyContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an emergency contact
export const deleteEmergencyContact = async (req, res) => {
  try {
    const emergencyContact = await EmergencyContact.findByIdAndDelete(req.params.id);
    if (!emergencyContact) {
      return res.status(404).json({ message: 'Emergency contact not found' });
    }
    res.json({ message: 'Emergency contact deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};