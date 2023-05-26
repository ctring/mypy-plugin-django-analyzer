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
Object.defineProperty(exports, "__esModule", { value: true });
const child = __importStar(require("child_process"));
const fs = __importStar(require("fs"));
function analyzeDjango(rootPath) {
    const mypyConfig = `
  [mypy]
  plugins = plugin/main.py
  ignore_missing_imports = True
  follow_imports = silent
  check_untyped_defs = True
  `;
    let mypyConfigPath = __dirname + "/mypy.ini";
    fs.writeFileSync(mypyConfigPath, mypyConfig);
    let ret = child.spawnSync("mypy", ["--config-file", mypyConfigPath, rootPath]);
    return ret.error, ret.stdout.toString(), ret.stderr.toString();
}
let err, stdout, stderr = analyzeDjango("/home/ctring/src/readwrite/examples/django-examples/books/books");
console.log("ERR:", err);
console.log("STDOUT:", stdout);
console.log("STDERR:", stderr);
//# sourceMappingURL=index.js.map