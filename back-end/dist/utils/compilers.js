"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compilers = exports.extensions = exports.cBashScript = exports.cppBashScript = exports.SANDBOX_NAME = void 0;
exports.SANDBOX_NAME = "sandbox";
// export const SANDBOX_CONTSTRAINTS = {
//   RAM: "200m",
//   CPU: ".5",
//   VM_RAM: "250m",
// };
exports.cppBashScript = `
#!/bin/bash
g++ -o output source.cpp
./output
`;
exports.cBashScript = `
#!/bin/bash
gcc -o output source.c
./output
`;
exports.extensions = {
    cpp: "cpp",
    c: "c",
    python: "py",
    ruby: "rb",
    javascript: "js",
    java: "java",
    go: "go",
    php: "php",
};
exports.compilers = {
    javascript: "node",
    node: "node",
    python: "python",
    ruby: "ruby",
    go: "go run",
    java: "java",
    php: "php",
    cpp: "g++",
    c: "gcc",
};
//# sourceMappingURL=compilers.js.map