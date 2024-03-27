"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.execShellCommand = exports.randomString = void 0;
const child_process_1 = __importDefault(require("child_process"));
const randomString = (size = 10) => {
    return require("crypto").randomBytes(size).toString("hex");
};
exports.randomString = randomString;
function execShellCommand(cmd, timeout = 7000) {
    const exec = child_process_1.default.exec;
    return new Promise((resolve, reject) => {
        exec(cmd, { timeout }, (error, stdout, stderr) => {
            if (error) {
                console.error(error);
                if (error.killed)
                    return resolve({ timoutErr: "Timout Error" });
            }
            resolve({ stdout, stderr });
        });
    });
}
exports.execShellCommand = execShellCommand;
//# sourceMappingURL=common.js.map