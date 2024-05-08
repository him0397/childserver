import mongoose from "mongoose";

const { Schema, model } = mongoose;

const childSchema = new Schema({
  childfirstname: String,
  childmiddlename: String,
  childlastname: String,
  preferedName: String,
  childgender: String,
  childdob: String,
  childbirthcertificate: String,
  childcrnnumber: String,
  childbirthcountry: String,
  childhomeaddress: String,
  childsuburb: String,
  childstate: String,
  childpostcode: String,
  isschool: String,
  childschoolname: String,
  childlanguages: String,
  childindigenousstatus: String,
  childculturalbackground: String,
  childsessiontype: String,
  childpreferencedays: String,
  childpreferredstartdate: String,
  childpreferrededucator: String,
});

const Child = model('child', childSchema);
export { Child };
