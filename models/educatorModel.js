import mongoose, { Schema, model } from "mongoose";

const educatorSchema = new Schema({
  educatorFirstName: {
    type: String,
    required: [true, "Educator's First Name is required"],
  },
  educatorLastName: {
    type: String,
    required: [true, "Educator Last name is required"],
  },
  homeAddress: {
    type: String,
    required: [true, "Home Address is required"],
  },
  dob: {
    type: Number,
    required: [true, "Date of birth is required"],
  },
  email: {
    type: Number,
    required: [true, "Email is required"],
  },
  dateOfEngagementWithServices: {
    type: String,
    required: [true, "Date Of Engagement With Services is required"],
  },
  expectedFdcStartDate: {
    type: String,
    required: [true, "Expected Fdc Start Date is required"],
  },
  yourPassportPhoto: {
    type: String,
    required: [true, "Your Passport Photo is required"],
  },
  yourPassportPhoto: {
    type: String,
    required: [true, "Your Passport Photo is required"],
  },
  yourPassportPhoto: {
    type: String,
    required: [true, "Your Passport Photo is required"],
  },
  yourPassportPhoto: {
    type: String,
    required: [true, "Your Passport Photo is required"],
  },
  yourPhone: {
    type: Number,
    required: [true, "Your Phone number is required"],
  },
  typeOfRelation: [{
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  }],
  dataArray: [{
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    }
  }],
  intendedFdcName: {
    type: String,
    required: [true, "Name of your FDC is required"],
  },
  yourProdaRa: {
    type: String,
    required: [true, "Proda is required"],
  },
  yourAbn: {
    type: String,
    required: [true, "ABN is required"],
  },
  bankName: {
    type: String,
    required: [true, "Bank name is required"],
  },
  accountName: {
    type: String,
    required: [true, "Account Name is required"],
  },
  accountNumber: {
    type: String,
    required: [true, "Account Number is required"],
  },
  bsb: {
    type: String,
    required: [true, "BSB is required"],
  },
  yourInsurancePhoto: {
    type: String,
    required: [true, "Your Insurance Photo is required"],
  },
  yourMedicalCheckPhoto: {
    type: String,
    required: [true, "Your Medical Check Photo is required"],
  },
  yourFitAndProperForm: {
    type: String,
    required: [true, "Your Fit And Proper Form is required"],
  },
  yourComplianceHistoryStatement: {
    type: String,
    required: [true, "Your Compliance History Statement Photo is required"],
  },
  educatorWorkingWithChildrenCheckCard: {
    type: String,
    required: [true, "Educator Working With Children Check Card is required"],
  },
  whatIsYourQualification: {
    type: String,
    required: [true, "Chat Is Your Qualification is required"],
  },
  certificateOfEducationInChildcare: {
    type: String,
    required: [true, "Certificate Of Education In Childcare is required"],
  },


});



const Educator = mongoose.model('educator', educatorSchema);
export {Educator};