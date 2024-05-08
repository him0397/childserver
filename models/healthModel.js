import mongoose from 'mongoose';

const { Schema } = mongoose;

const healthAndMedicalInfoSchema = new Schema({
  medicarenumber: {
    type: String,
  },
  medicalcentername: {
    type: String,
  },
  PrivateHealthInsurer: {
    type: String,
  },
  separatedornot: {
    type: String,
  },
  immunisationhistory: {
    type: String,
  },
  courtorderforaccessdocument: {
    type: String,
  },
  courtorderforaccess: {
    type: String,
  },
  courtorderforcontact: {
    type: String,
  },
  healthproblembriefdescription: {
    type: String,
  },
  allergiesbriefdescription: {
    type: String,
  },
  physicalproblembriefdescription: {
    type: String,
  },
  regularmedicinebriefdescription: {
    type: String,
  },
});

const HealthAndMedicalInfo = mongoose.model('HealthAndMedicalInfo', healthAndMedicalInfoSchema);

export default HealthAndMedicalInfo;