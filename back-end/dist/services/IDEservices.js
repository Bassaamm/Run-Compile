"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCode = void 0;
const common_1 = require("../utils/common");
const compilers_1 = require("../utils/compilers");
const path_1 = __importDefault(require("path"));
const mkdirp_1 = require("mkdirp");
const fs_1 = __importStar(require("fs"));
const runCode = (language, sourceCode, id, compiler) => __awaiter(void 0, void 0, void 0, function* () {
    const folderPath = path_1.default.join("temp", id);
    yield (0, mkdirp_1.mkdirp)(folderPath);
    const sourceFilePath = path_1.default.join(folderPath, `source.${compilers_1.extensions[language]}`);
    const sourceFileName = `source.${compilers_1.extensions[language]}`;
    yield fs_1.default.writeFile(sourceFilePath, sourceCode, (err) => {
        if (err) {
            console.log(err);
        }
    });
    const bashPath = path_1.default.join(folderPath, `run.sh`);
    let bashScript;
    if (language === "cpp") {
        bashScript = compilers_1.cppBashScript;
    }
    else if (language === "c") {
        bashScript = compilers_1.cBashScript;
    }
    else {
        bashScript = `${compiler} ${sourceFileName}`;
    }
    yield fs_1.default.writeFile(bashPath, bashScript, (err) => {
        if (err) {
            console.log(err);
        }
    });
    const command = `docker run --rm -m=200m --memory-swap=250m --cpus=.5 --mount type=bind,source=${path_1.default.join(process.cwd(), "temp", id)},target=/usercode ${compilers_1.SANDBOX_NAME} /bin/bash run.sh`;
    let output = yield (0, common_1.execShellCommand)(command);
    yield fs_1.promises.rm(folderPath, { recursive: true, force: true });
    return output;
});
exports.runCode = runCode;
//# sourceMappingURL=IDEservices.js.map