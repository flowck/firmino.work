const fs = require("fs");
const path = require("path");
const yml = require("json-to-pretty-yaml");
const config = require("../_config.json");

const DEV_URL = process.env.NODE_ENV !== "production"
  ? "http://localhost:4000/blog"
  : "https://changani.me/blog";

function main() {
  console.log('Generating config');
  config.url = DEV_URL;
  fs.writeFileSync(path.join(__dirname, '../_config.yml'), yml.stringify(config));
  console.log('Config generated');
}

main();