import { Child } from '../models/childModel.js';
import { Helpers } from '../utils/helpers.js';

const getChildDetails = Helpers.asyncHandler(async (req, res) => {
  const child = await Child.findById(req.params.id);

  if (child) {
    res.json(child);
  } else {
    res.status(404);
    throw new Error('Child not found');
  }
});

const registerChild = Helpers.asyncHandler(async (req, res) => {
  const child = await Child.create(req.body);

  if (child) {
    res.status(201).json(child);
  } else {
    res.status(400);
    throw new Error('Invalid child data');
  }
});

const updateChildDetails = Helpers.asyncHandler(async (req, res) => {
  const child = await Child.findById(req.params.id);

  if (child) {
    Object.keys(req.body).forEach(key => {
      child[key] = req.body[key];
    });

    const updatedChild = await child.save();
    res.json(updatedChild);
  } else {
    res.status(404);
    throw new Error('Child not found');
  }
});

const deleteChild = Helpers.asyncHandler(async (req, res) => {
  const child = await Child.findById(req.params.id);

  if (child) {
    await Child.deleteOne({ _id: child._id });
    res.json({ message: 'Child removed' });
  } else {
    res.status(404);
    throw new Error('Child not found');
  }
});

const getAllChildren = Helpers.asyncHandler(async (req, res) => {
  const children = await Child.find({});
  res.json(children);
});

export {
  getChildDetails,
  registerChild,
  updateChildDetails,
  deleteChild,
  getAllChildren,
};