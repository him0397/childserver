import mongoose, { Schema, model } from "mongoose";

const childSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  middleName: {
    type: String,
    required: [true, "Middle name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  preferedName: {
    type: String,
    required: [true, "Prefedred name is required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
  },
  dob: {
    type: Number,
    required: [true, "Date of birth is required"],
  },
  crnNumber: {
    type: Number,
    required: [true, "Crn Number is required"],
  },
  countryOfBirth: {
    type: String,
    required: [true, "Country Of Birth is required"],
  },
  homeAddress: {
    type: String,
    required: [true, "Home Address is required"],
  },
  subrub: {
    type: String,
    required: [true, "Password is required"],
  },
  state: {
    type: String,
    required: [true, "State name is required"],
  },
  postcode: {
    type: Number,
    required: [true, "Post code is required"],
  },
  school: {
    type: String,
    required: [true, "School name is required"],
  },
  languageSpokenHome: {
    type: String,
    required: [true, "Language is required"],
  },
  indigenousState: {
    type: String,
    required: [true, "Indigenous state is required"],
  },
  culturalBackground: {
    type: String,
    required: [true, "Cultural background name is required"],
  },
  sessionType: {
    type: String,
    required: [true, "Session type is required"],
  },
  preferenceDays: {
    type: String,
    required: [true, "Preference days are required"],
  },
  preferredStartDate: {
    type: String,
    required: [true, "Prefered Start date is required"],
  },
  prefferedEducator: {
    type: String,
    required: [true, "Prefered Educator is required"],
  },

});



const Child = mongoose.model('child', childSchema);
export {Child};