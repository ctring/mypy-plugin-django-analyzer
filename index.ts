import * as child from "child_process";
import * as fs from "fs";

function analyzeDjango(rootPath: string) {
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