import { EmergencyContact } from "../models/emergencyModel.js";
import asyncHandler from 'express-async-handler';

// Get all emergency contacts
export const getAllEmergencyContacts = asyncHandler(async (req, res) => {
    const contacts = await EmergencyContact.find({});
    res.json(contacts);
});

// Get a single emergency contact by ID
export const getEmergencyContactById = asyncHandler(async (req, res) => {
    const contact = await EmergencyContact.findById(req.params.id);
    if (contact) {
        res.json(contact);
    } else {
        res.status(404);
        throw new Error('Emergency contact not found');
    }
});

// Create a new emergency contact
export const createEmergencyContact = asyncHandler(async (req, res) => {
    const { name, phone, relationship, childID } = req.body;
    const contact = new EmergencyContact({
        name,
        phone,
        relationship,
        childID
    });
    const createdContact = await contact.save();
    res.status(201).json(createdContact);
});

// Update an emergency contact
export const updateEmergencyContact = asyncHandler(async (req, res) => {
    const { name, phone, relationship } = req.body;
    const contact = await EmergencyContact.findById(req.params.id);

    if (contact) {
        contact.name = name || contact.name;
        contact.phone = phone || contact.phone;
        contact.relationship = relationship || contact.relationship;

        const updatedContact = await contact.save();
        res.json(updatedContact);
    } else {
        res.status(404);
        throw new Error('Emergency contact not found');
    }
});

// Delete an emergency contact
export const deleteEmergencyContact = asyncHandler(async (req, res) => {
    const contact = await EmergencyContact.findById(req.params.id);
    if (contact) {
        await contact.remove();
        res.json({ message: 'Emergency contact removed' });
    } else {
        res.status(404);
        throw new Error('Emergency contact not found');
    }
});