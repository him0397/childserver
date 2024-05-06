import { Custody } from '../models/custodyModel.js';
import { Helpers } from '../utils/helpers.js';

const getCustodyDetails = Helpers.asyncHandler(async (req, res) => {
  const custody = await Custody.findById(req.params.id);

  if (custody) {
    res.json(custody);
  } else {
    res.status(404);
    throw new Error('Custody details not found');
  }
});

const registerCustody = Helpers.asyncHandler(async (req, res) => {
  const { childID, custodyType, startDate, endDate } = req.body;

  const custodyExists = await Custody.findOne({ childID, custodyType });

  if (custodyExists) {
    res.status(400);
    throw new Error('Custody arrangement already exists for this child');
  }

  const custody = await Custody.create({
    childID,
    custodyType,
    startDate,
    endDate,
  });

  if (custody) {
    res.status(201).json(custody);
  } else {
    res.status(400);
    throw new Error('Invalid custody data');
  }
});

const updateCustodyDetails = Helpers.asyncHandler(async (req, res) => {
  const custody = await Custody.findById(req.params.id);

  if (custody) {
    custody.custodyType = req.body.custodyType || custody.custodyType;
    custody.startDate = req.body.startDate || custody.startDate;
    custody.endDate = req.body.endDate || custody.endDate;

    const updatedCustody = await custody.save();

    res.json(updatedCustody);
  } else {
    res.status(404);
    throw new Error('Custody details not found');
  }
});

const deleteCustody = Helpers.asyncHandler(async (req, res) => {
  const custody = await Custody.findById(req.params.id);

  if (custody) {
    await Custody.deleteOne({ _id: custody._id });
    res.json({ message: 'Custody arrangement removed' });
  } else {
    res.status(404);
    throw new Error('Custody details not found');
  }
});

const getAllCustodies = Helpers.asyncHandler(async (req, res) => {
  const custodies = await Custody.find({});
  res.json(custodies);
});

export {
  getCustodyDetails,
  registerCustody,
  updateCustodyDetails,
  deleteCustody,
  getAllCustodies,
};