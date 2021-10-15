const fs = require("fs/promises")
const express = require("express");

async function main() {
  const app = express();
  eval(await generateRoute());
  app.get("/", (req, res) => res.send("http://localhost:3000/products or http://localhost:3000/users"))
  app.listen(3000, () => console.log("Running on http://localhost:3000"));
}

main();

async function generateRoute() {
  let headers = '';
  let script = '';
  const dir = await fs.opendir(".");
  
  for await (const dirent of dir) {
    if (dirent.isDirectory()) {
      // mungkin lebih baik ngecek dulu, di dalem directory `dirent` ini ada index.js ga
      if (dirent.name === "node_modules" || dirent.name === "dist" || dirent.name === ".git") {
        continue;
      }
      headers += `const ${dirent.name} = require("./${dirent.name}/index.js");\n`
      script += `app.use("/${dirent.name}", ${dirent.name});\n`
    }
  }

  return headers + '\n' + script;
}
