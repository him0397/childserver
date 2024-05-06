import mongoose from "mongoose";

const { Schema, model } = mongoose;

const educatorSchema = new Schema({
  firstname: {
    type: String,
    required: [true, "Educator's First Name is required"],
  },
  lastname: {
    type: String,
    required: [true, "Educator Last name is required"],
  },
  dob: {
    type: String,
    required: [true, "Date of birth is required"],
  },
  doe: {
    type: String,
    required: [true, "Date Of Engagement With Services is required"],
  },
  address: {
    type: String,
    required: [true, "Home Address is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  fdc: {
    type: Date,
    required: [true, "Expected Fdc Start Date is required"],
  },
  passport1: {
    type: String,
    required: [true, "Your Passport Photo is required"],
  },
  passport2: {
    type: String,
    required: [true, "Your Passport Photo is required"],
  },
  passport3: {
    type: String,
    required: [true, "Your Passport Photo is required"],
  },
  phone: {
    type: Number,
    required: [true, "Your Phone number is required"],
  },
  prodaRA: {
    type: String,
    required: [true, "Proda is required"],
  },
  ABN: {
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
    type: Number,
    required: [true, "Account Number is required"],
  },
  BSB1: {
    type: Number,
    required: [true, "BSB is required"],
  },
  BSB2: {
    type: Number,
    required: [true, "BSB is required"],
  },
  Addchild: [
    {
      childname: {
        type: String,
        required: [true, "Child Name is required"],
      },
      childage: {
        type: Number,
        required: [true, "Age is required"],
      },
    },
  ],
  fdcname: {
    type: String,
    required: [true, "Name of your FDC is required"],
  },
  FamilyMember: [
    { 
      relativename: {
        type: String,
        required: [true, "Relative Name is required"],
      },
      relativeage: {
        type: Number,
        required: [true, "Relative Age is required"],
      },
      relativetype: {
        type: String,
        required: [true, "Type of Relation is required"],
      },
    },
  ],
  insurancephoto: {
    type: String,
    required: [true, "Your Insurance Photo is required"],
  },
  medicalcheck: {
    type: String,
    required: [true, "Your Medical Check Photo is required"],
  },
  fitform: {
    type: String,
    required: [true, "Your Fit And Proper Form is required"],
  },
  compliancehistory: {
    type: String,
    required: [true, "Your Compliance History Statement Photo is required"],
  },
  workingwithchildrencard: {
    type: String,
    required: [true, "Educator Working With Children Check Card is required"],
  },
  qualification1: {
    type: String,
    required: [true, "Chat Is Your Qualification is required"],
  },
  qualification2: {
    type: String,
    required: [true, "Chat Is Your Qualification is required"],
  },
  otherqualification: {
    type: String,
    required: [true, "Chat Is Your Qualification is required"],
  },
  certificateinearlychildhood: {
    type: String,
    required: [true, "Certificate Of Education In Childcare is required"],
  },
  diplomainchildhood: [
    {
      type: String,
      required: [true, "Diploma Of Educator is required"],
    },
  ],
  firstaiddate: {
    type: Date,
    required: [true, "Date Of Firstaid is required"],
  },
  firstaid: {
    type: String,
    required: [true, "Image Of Firstaid Certificate is required"],
  },
  cprdate: {
    type: Date,
    required: [true, "Cpr Date is required"],
  },
  cprphoto: {
    type: String,
    required: [true, "Image Of CPR Certificate is required"],
  },
  childprotectiondate: {
    type: String,
    required: [true, "Child Protection Course is required"],
  },
  childprotectionphoto: {
    type: String,
    required: [true, "Image Of Child Protection Course is required"],
  },
  developmentcoursedescription: {
    type: String,
  },
  developmentcoursephoto: {
    type: String,
  },
  policeclearancedate: {
    type: Date,
  },
  policeclearancephoto: {
    type: String,
  },
  familyoliceclearancedate: {
    type: String,
  },
  familypoliceclearancephoto: {
    type: String,
  },
  // Upload some basic documents
  vaccinationphoto: {
    type: String,
    required: [true, "Evidence Of Vaccination is required"],
  },
  safetyglassinspectionphoto: {
    type: String,
    required: [true, "Evidence Of Safety Glass Inspection is required"],
  },
  councilapprovalphoto: {
    type: String,
    required: [true, "Evidence Of Council Approval is required"],
  },
  pestcontrolevidencephoto: {
    type: String,
    required: [true, "Evidence Of Pest Control is required"],
  },
  //Your Normal Operation Hours?
//   normalOperationHours: [
//     {
//       type: String,
//       required: [true, "Normal Operation Hours is required"],
//     },
//   ],
  });

const Educator = mongoose.model('educator', educatorSchema);
export {Educator};
