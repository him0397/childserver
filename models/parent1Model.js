import mongoose, { Schema } from "mongoose";

const parent1Schema = new Schema({
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
  homePhone: {
    type: String,
    required: [true, "Home Phone number is required"],
  },
  workPhone: {
    type: String,
    required: [true, "Work Phone number is required"],
  },
  mobile: {
    type: String,
    required: [true, "Mobile number is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  occupation: {
    type: String,
    required: [true, "Occupation is required"],
  },
  placeOfWork: {
    type: String,
    required: [true, "Place Of Work is required"],
  },
  workStart: {
    type: String,
    required: [true, "Work start is required"],
  },
  workFinish: {
    type: String,
    required: [true, "Work Finish is required"],
  },
  languageSpokenHome: {
    type: String,
    required: [true, "Language Spoken at Home is required"],
  },
  culturalBackground: {
    type: String,
    required: [true, "Cultural background name is required"],
  },
  healthCareCardHolder: {
    type: String,
    required: [true, "Health care card holder is required"],
  },
  ////////////////////////////////////////////////////////////////////////////////////
  bankAccountDetails: {
    type: String,
    required: [true, "Bank Account Details is required"],
  },
  bankName: {
    type: String,
    required: [true, "Bank Name is required"],
  },
  bsb: {
    type: String,
    required: [true, "Bsb is required"],
  },
  accountName: {
    type: String,
    required: [true, "Account Name is required"],
  },
  accountNumber: {
    type: String,
    required: [true, "Account Number Details is required"],
  },
  preferredMethodOfContact: {
    type: String,
    required: [true, "Preferred Method Of Contact is required"],
  },
  indigenousStatus: {
    type: String,
    required: [true, "Indigenous Status is required"],
  },
  disability: {
    type: String,
    required: [true, "Details of Disability  is required"],
  },
  primaryCareGiver: {
    type: String,
    required: [true, "Primary Care Giver Details is required"],
  },

});

const Parent1 = mongoose.model('parent1', parent1Schema);
export {Parent1};