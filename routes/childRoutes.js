import express from "express";
import { registerChild } from "../controllers/childDetails.js";

const router = express.Router();

router.post("/register", registerChild);

export default router;
