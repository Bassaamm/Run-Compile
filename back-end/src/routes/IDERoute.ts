import express from "express";
import { runCode } from "../controllers/IDEhandler";

export const IDErouter = express.Router();

IDErouter.post("/run", runCode);
