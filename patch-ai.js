const fs = require("fs");
const path = require("path");

const packageJsonPath = path.join(
  // eslint-disable-next-line no-undef
  __dirname,
  "node_modules",
  "ai",
  "package.json"
);

fs.readFile(packageJsonPath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading package.json:", err);
    return;
  }

  let packageJson;
  try {
    packageJson = JSON.parse(data);
  } catch (err) {
    console.error("Error parsing package.json:", err);
    return;
  }

  if (!packageJson.exports) {
    console.error("No exports field found in package.json");
    return;
  }

  if (!packageJson.exports["./rsc"]) {
    console.error("No ./rsc specifier found in exports field");
    return;
  }

  packageJson.exports["./rsc"].require = packageJson.exports["./rsc"].import;

  fs.writeFile(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2),
    "utf8",
    (err) => {
      if (err) {
        console.error("Error writing package.json:", err);
        return;
      }

      console.log("package.json has been patched successfully");
    }
  );
});
