const fs = require("fs");
const msgPath = process.env.HUSKY_GIT_PARAMS;
const msg = fs.readFileSync(msgPath, "utf-8").trim();

const commitRegex = /^(FE|BE):(\w+)(\((\w+)\))?!?: (.+)$/;

if (!commitRegex.test(msg)) {
  console.error(`
    Error: Invalid commit message format.
    The commit message should start with either 'FE' or 'BE', followed by a colon and space, and then a brief summary of the changes.
    Example: 'FE: Add login form'.
  `);
  process.exit(1);
}
