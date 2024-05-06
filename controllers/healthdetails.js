// healthAndMedicalInfoController.js
import HealthAndMedicalInfo from '../models/healthModel.js';

export const addHealthAndMedicalInfo = async (req, res) => {
  try {
    const healthInfo = new HealthAndMedicalInfo(req.body);
    await healthInfo.save();
    res.status(201).json(healthInfo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllHealthAndMedicalInfo = async (req, res) => {
  try {
    const healthInfos = await HealthAndMedicalInfo.find();
    res.json(healthInfos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getHealthAndMedicalInfoById = async (req, res) => {
  try {
    const healthInfo = await HealthAndMedicalInfo.findById(req.params.id);
    if (!healthInfo) {
      return res.status(404).json({ message: 'Health and medical information not found' });
    }
    res.json(healthInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateHealthAndMedicalInfo = async (req, res) => {
  try {
    const healthInfo = await HealthAndMedicalInfo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!healthInfo) {
      return res.status(404).json({ message: 'Health and medical information not found' });
    }
    res.json(healthInfo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteHealthAndMedicalInfo = async (req, res) => {
  try {
    const healthInfo = await HealthAndMedicalInfo.findByIdAndDelete(req.params.id);
    if (!healthInfo) {
      return res.status(404).json({ message: 'Health and medical information not found' });
    }
    res.json({ message: 'Health and medical information deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};