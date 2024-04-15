import ChildModel from "../models/childModel.js";
export async function registerChild(req, res, next) {
  try {
    const {
      firstName,
      middleName,
      lastName,
      preferedName,
      gender,
      dob,
      crnNumber,
      countryOfBirth,
      homeAddress,
      subrub,
      state,
      postcode,
      school,
      languageSpokenHome,
      indigenousState,
      culturalBackground,
      sessionType,
      preferenceDays,
      preferredStartDate,
      prefferedEducator,
    } = req.body;

    const newChild = new ChildModel({
      firstName,
      middleName,
      lastName,
      preferedName,
      gender,
      dob,
      crnNumber,
      countryOfBirth,
      homeAddress,
      subrub,
      state,
      postcode,
      school,
      languageSpokenHome,
      indigenousState,
      culturalBackground,
      sessionType,
      prefferedEducator,
      preferredStartDate,
      preferenceDays,
    });

    await newChild.save();

    res.status(201).json({ child: newChild._id, registeredChild: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ registeredChild: false });
  }
}