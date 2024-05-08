import mongoose, { Schema, model } from "mongoose";

const emergencySchema = new Schema({
  emergencyContactName: {
    type: String,
  },
  emergencyRelationshipToChild: {
    type: String,
  },
  emergencyContactDob: {
    type: String,
  },
  emergencyAddress: {
    type: String,
  },
  emergencyHomeTelephone: {
    type: String,
  },
  emergencyWorkTelephone: {
    type: String,
  },
  emergencyMobileNumber: {
    type: String,
  },
  emergencyOccupation: {
    type: String,
  },
  emergencyDeliverChild: {
    type: String,
  },
  emergencyGivePermissionToEducator: {
    type: String,
  },
  emergencyMedicalConsent: {
    type: String,
  },
  emergencyPermitTransportation: {
    type: String,
  },
  emergencyArrangeTransportation: {
    type: String,
  },
  emergencyRequestMedication: {
    type: String,
  },
  emergencyaccidentnotify: {
    type: String,
  },
});

const EmergencyContact = mongoose.model('emergencycontact', emergencySchema);
export { EmergencyContact };