export const SANDBOX_NAME = "sandbox";

// export const SANDBOX_CONTSTRAINTS = {
//   RAM: "200m",
//   CPU: ".5",
//   VM_RAM: "250m",
// };

export const cppBashScript = `
#!/bin/bash
g++ -o output source.cpp
./output
`;

export const cBashScript = `
#!/bin/bash
gcc -o output source.c
./output
`;

export const extensions: any = {
  cpp: "cpp",
  c: "c",
  python: "py",
  ruby: "rb",
  javascript: "js",
  java: "java",
  go: "go",
  php: "php",
};

export const compilers: any = {
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
