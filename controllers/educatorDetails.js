import { Educator } from '../models/educatorModel.js';

// Create a new educator
export const createEducator = async (req, res) => {
  try {
    const educator = new Educator(req.body);
    await educator.save();
    res.status(201).send(educator);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all educators
export const getAllEducators = async (req, res) => {
  try {
    const educators = await Educator.find({});
    res.status(200).send(educators);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get an educator by ID
export const getEducatorById = async (req, res) => {
  try {
    const educator = await Educator.findById(req.params.id);
    if (!educator) {
      return res.status(404).send();
    }
    res.send(educator);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update an educator by ID
export const updateEducator = async (req, res) => {
  try {
    const educator = await Educator.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!educator) {
      return res.status(404).send();
    }
    res.send(educator);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete an educator by ID
export const deleteEducator = async (req, res) => {
  try {
    const educator = await Educator.findByIdAndDelete(req.params.id);
    if (!educator) {
      return res.status(404).send();
    }
    res.send(educator);
  } catch (error) {
    res.status(500).send(error);
  }
};