// parents1Controller.js
import { Parent1 } from '../models/parent1Model.js'; // Adjust the import path as necessary

// Get all parents
export async function getAllParents(req, res) {
  try {
    const parents = await Parent1.find();
    res.status(200).json(parents);
  } catch (error) {
    console.error("Error fetching parents:", error);
    res.status(500).json({ error: "An error occurred while fetching the parents." });
  }
}

// Create a new parent
export async function createParent(req, res) {
  try {
    const newParent = await Parent1.create(req.body);
    res.status(201).json(newParent);
  } catch (error) {
    console.error("Error creating parent:", error);
    res.status(500).json({ error: "An error occurred while creating the parent." });
  }
}

// Update a parent by ID
export async function updateParent(req, res) {
  try {
    const updatedParent = await Parent1.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedParent) {
      return res.status(404).json({ message: "Parent not found" });
    }
    res.status(200).json(updatedParent);
  } catch (error) {
    console.error("Error updating parent:", error);
    res.status(500).json({ error: "An error occurred while updating the parent." });
  }
}

// Delete a parent by ID
export async function deleteParent(req, res) {
  try {
    const parent = await Parent1.findByIdAndDelete(req.params.id);
    if (!parent) {
      return res.status(404).json({ message: "Parent not found" });
    }
    res.status(200).json({ message: "Parent successfully deleted" });
  } catch (error) {
    console.error("Error deleting parent:", error);
    res.status(500).json({ error: "An error occurred while deleting the parent." });
  }
}