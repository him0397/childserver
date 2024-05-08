import mongoose, { Schema, model } from "mongoose";

const custodySchema = new Schema({
  separatedornot: {
    type: String,
    // required: [true, "First name is required"],
  },
  legalcustody: {
    type: String,
    // required: [true, "First name is required"],
  },
  parent1access: {
    type: String,
    // required: [true, "First name is required"],
  },
  parent1accessdescription: {
    type: String,
    // required: [true, "First name is required"],
  },
  parent2access: {
    type: String,
    // required: [true, "First name is required"],
  },
  parent2accessdescription: {
    type: String,
    // required: [true, "First name is required"],
  },
  courtorderforaccess: {
    type: String,
    // required: [true, "First name is required"],
  },
  courtorderforaccessdocument: {
    type: String,
    // required: [true, "First name is required"],
  },
  courtorderforcontact: {
    type: String,
    // required: [true, "First name is required"],
  },
  courtorderforcontactdocument: {
    type: String,
    // required: [true, "First name is required"],
  },
});    

const Custody = mongoose.model("custody", custodySchema);
export { Custody };
