import mongoose, { Schema, model } from "mongoose";

const childSchema = new Schema({
  childfirstname: {
    type: String,
    required: [true, "First name is required"],
  },
  childmiddlename: {
    type: String,
    required: [true, "Middle name is required"],
  },
  childlastname: {
    type: String,
    required: [true, "Last name is required"],
  },
  preferedName: {
    type: String,
    required: [true, "Prefedred name is required"],
  },
  childgender: {
    type: String,
    required: [true, "Gender is required"],
  },
  childdob: {
    type: String,
    required: [true, "Date of birth is required"],
  },
  childbirthcertificate: {
    type: String,
    required: [true, "Image of birth certificate is required"],
  },
  childcrnnumber: {
    type: String,
    required: [true, "Crn Number is required"],
  },
  childbirthcountry: {
    type: String,
    required: [true, "Country Of Birth is required"],
  },
  childhomeaddress: {
    type: String,
    required: [true, "Home Address is required"],
  },
  childsuburb: {
    type: String,
    required: [true, "Password is required"],
  },
  childstate: {
    type: String,
    required: [true, "State name is required"],
  },
  childpostcode: {
    type: String,
    required: [true, "Post code is required"],
  },
  isschool: {
    type: String,
    required: [true, "School name is required"],
  },
  childschoolname: {
    type: String,
  },
  childlanguages: {
    type: String,
    required: [true, "Language is required"],
  },
  childindigenousstatus: {
    type: String,
    required: [true, "Indigenous state is required"],
  },
  childculturalbackground: {
    type: String,
    required: [true, "Cultural background name is required"],
  },
  childsessiontype: {
    type: String,
    required: [true, "Session type is required"],
  },
  childpreferencedays: {
    type: String,
    required: [true, "Preference days are required"],
  },
  childpreferredstartdate: {
    type: String,
    required: [true, "Prefered Start date is required"],
  },
  childpreferrededucator: {
    type: String,
    required: [true, "Prefered Educator is required"],
  },

});

const Child = mongoose.model('child', childSchema);
export {Child};