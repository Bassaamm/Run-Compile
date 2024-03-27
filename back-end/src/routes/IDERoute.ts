import express from "express";
import { runCode } from "../controllers/IDEcontroller";

export const IDErouter = express.Router();

IDErouter.post("/run", runCode);
