"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDErouter = void 0;
const express_1 = __importDefault(require("express"));
const IDEcontroller_1 = require("../controllers/IDEcontroller");
exports.IDErouter = express_1.default.Router();
exports.IDErouter.post("/run", IDEcontroller_1.runCode);
//# sourceMappingURL=IDERoute.js.map