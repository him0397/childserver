import express from "express";
import { registerparent1 } from "../controllers/parent1details.js";

const router = express.Router();

router.post("/register", registerparent1);

export default router;