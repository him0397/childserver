import mongoose, { Schema } from "mongoose";

const parent1Schema = new Schema({
  parent1firstname: {
    type: String,
    required: [true, "First name is required"],
  },
  parent1middlename: {
    type: String,
    required: [true, "Middle name is required"],
  },
  parent1lastname: {
    type: String,
    required: [true, "Last name is required"],
  },
  parent1preferredname: {
    type: String,
    required: [true, "Prefedred name is required"],
  },
  parent1gender: {
    type: String,
    required: [true, "Gender is required"],
  },
  parent1crnnumber: {
    type: String,
    required: [true, "Crn Number is required"],
  },
  parent1dob: {
    type: Number,
    required: [true, "Date of birth is required"],
  },
  parent1birthcertificate: {
    type: String,
    required: [true, "Country Of Birth is required"],
  },
  parent1birthcountry: {
    type: String,
    required: [true, "Country Of Birth is required"],
  },
  parent1homeaddress: {
    type: String,
    required: [true, "Home Address is required"],
  },
  parent1suburb: {
    type: String,
    required: [true, "Password is required"],
  },
  parent1state: {
    type: String,
    required: [true, "State name is required"],
  },
  parent1postcode: {
    type: String,
    required: [true, "Post code is required"],
  },
  parent1homephone: {
    type: String,
    required: [true, "Home Phone number is required"],
  },
  parent1workphone: {
    type: String,
    required: [true, "Work Phone number is required"],
  },
  parent1mobile: {
    type: String,
    required: [true, "Mobile number is required"],
  },
  parent1email: {
    type: String,
    required: [true, "Email is required"],
  },
  parent1occupation: {
    type: String,
    required: [true, "Occupation is required"],
  },
  parent1placeofwork: {
    type: String,
    required: [true, "Place Of Work is required"],
  },
  parent1workstart: {
    type: String,
    required: [true, "Work start is required"],
  },
  parent1workfinish: {
    type: String,
    required: [true, "Work Finish is required"],
  },
  parent1languages: {
    type: String,
    required: [true, "Language Spoken at Home is required"],
  },
  parent1culturalbackground: {
    type: String,
    required: [true, "Cultural background name is required"],
  },
  parent1preferredmethodofcontact: {
    type: String,
    required: [true, "Health care card holder is required"],
  },
  parent1commonwealthseniorcard: {
    type: String,
    required: [true, "Health care card holder is required"],
  },
  parent1commonwealthseniorcardphoto: {
    type: String,
    required: [true, "Health care card holder is required"],
  },parent1fosterchildhealthcarecardexpirydate: {
    type: String,
    required: [true, "Health care card holder is required"],
  },
  parent1excarerallowancecardexpirydate: {
    type: String,
    required: [true, "Health care card holder is required"],
  },
  parent1healthcarecard: {
    type: Boolean,
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
  parent1indigenousstate: {
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