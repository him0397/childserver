// import parent1Model from "../models/childModel.js";
// export async function registerparent1(req, res, next) {
//   try {
//     const {
//       firstName,
//       middleName,
//       lastName,
//       preferedName,
//       gender,
//       dob,
//       crnNumber,
//       countryOfBirth,
//       homeAddress,
//       subrub,
//       state,
//       postcode,
//       homePhone,
//       workPhone,
//       mobile,import parent1Model from "../models/parent1Model.js";

//       export async function registerparent1(req, res, next) {
//         try {
//           const parentData = req.body;
//           const newParent = new parent1Model(parentData);
//           const savedParent = await newParent.save();
          
//           res.status(201).json({ parentId: savedParent._id, registeredParent: true });
//         } catch (error) {
//           console.error("Error registering parent:", error);
//           if (error.name === "ValidationError") {
//             // Handle Mongoose validation errors
//             const errors = Object.values(error.errors).map((err) => err.message);
//             res.status(400).json({ errors });
//           } else {
//             // Handle other types of errors
//             res.status(500).json({ error: "Failed to register parent" });
//           }
//         }
//       }
      
//       email,
//       occupation,
//       placeOfWork,
//       workStart,
//       workFinish,
//       languageSpokenHome,
//       culturalBackground,
//       healthCareCardHolder,
//       bankAccountDetails,
//       bankName,
//       bsb,
//       accountName,
//       accountNumber,
//       preferredMethodOfContract,
//       indigenousStatus,
//       disability,
//       primaryCareGiver,
      

//     } = req.body;

//     const newChild = new parent1Model({
//       firstName,
//       middleName,
//       lastName,
//       preferedName,
//       gender,
//       dob,
//       crnNumber,
//       countryOfBirth,
//       homeAddress,
//       subrub,
//       state,
//       postcode,
//       homePhone,
//       workPhone,
//       mobile,
//       email,
//       occupation,
//       placeOfWork,
//       workStart,
//       workFinish,
//       languageSpokenHome,
//       culturalBackground,
//       healthCareCardHolder,
//       bankAccountDetails,
//       bankName,
//       bsb,
//       accountName,
//       accountNumber,
//       preferredMethodOfContract,
//       indigenousStatus,
//       disability,
//       primaryCareGiver,

//     });

//     await newParent.save();

//     res.status(201).json({ child: newParent._id, registeredParent: true });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ registeredParent: false });
//   }
// }
import { Parent1 } from "../models/parent1Model.js";

export async function registerparent1(req, res, next) {
  try {
    const parentData = req.body;
    const newParent = new Parent1(parentData); // Corrected model name
    const savedParent = await newParent.save();

    res.status(201).json({ parentId: savedParent._id, registeredParent: true });
  } catch (error) {
    console.error("Error registering parent:", error);
    if (error.name === "ValidationError") {
      // Handle Mongoose validation errors
      const errors = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ errors });
    } else {
      // Handle other types of errors
      res.status(500).json({ error: "Failed to register parent" });
    }
  }
}
