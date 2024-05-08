import mongoose from "mongoose";

const { Schema, model } = mongoose;

const educatorSchema = new Schema({
  firstname: String,
  lastname: String,
  dob: String,
  doe: String,
  address: String,
  email: String,
  fdc: Date,
  passportphoto: String,
  driverlicense: String,
  medicarecard: String,
  phone: Number,
  prodaRA: String,
  ABN: String,
  bankName: String,
  accountName: String,
  accountNumber: Number,
  bsb1: Number,
  bsb2: Number,
  Addchild: [
    {
      childname: String,
      childage: Number,
    },
  ],
  fdcname: String,
  FamilyMember: [
    { 
      relativename: String,
      relativeage: Number,
      relativetype: String,
    },
  ],
  insurancephoto: String,
  medicalcheck: String,
  fitform: String,
  compliancehistory: String,
  workingwithchildrencard: String,
  qualification1: String,
  qualification2: String,
  otherqualification: String,
  certificateinearlychildhood: String,
  diplomainchildhood:String,

  firstaiddate: Date,
  firstaid: String,
  cprdate: Date,
  cprphoto: String,
  childprotectiondate: String,
  childprotectionphoto: String,
  developmentcoursedescription: String,
  developmentcoursephoto: String,
  policeclearancedate: Date,
  policeclearancephoto: String,
  familyoliceclearancedate: String,
  familypoliceclearancephoto: String,
  vaccinationphoto: String,
  safetyglassinspectionphoto: String,
  councilapprovalphoto: String,
  pestcontrolevidencephoto: String,
  //Your Normal Operation Hours?
  // normalOperationHours: [String],
});

const Educator = mongoose.model('educator', educatorSchema);
export { Educator };
