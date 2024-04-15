import { Child } from "../models/childModel.js";

export async function registerChild(req, res, next) {
  try {
    // Destructure the request body for better readability
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
      suburb,
      state,
      postcode,
      school,
      languageSpokenHome,
      indigenousState,
      culturalBackground,
      sessionType,
      preferenceDays,
      preferredStartDate,
      preferredEducator,
    } = req.body;

    // Create a new Child instance
    const newChild = new Child({
      firstName,
      middleName,
      lastName,
      preferedName,
      gender,
      dob,
      crnNumber,
      countryOfBirth,
      homeAddress,
      suburb, // Corrected typo in variable name
      state,
      postcode,
      school,
      languageSpokenHome,
      indigenousState,
      culturalBackground,
      sessionType,
      preferredEducator, // Corrected variable name
      preferredStartDate,
      preferenceDays,
    });

    // Save the new child to the database
    await newChild.save();

    // Respond with the ID of the registered child
    res.status(201).json({ childId: newChild._id, registeredChild: true });
  } catch (err) {
    // Handle errors gracefully
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while registering the child." });
  }
}
