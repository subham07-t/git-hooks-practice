module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["FE:feat", "FE:fix"]],
    "type-case": [2, "always", "upper-case"],
    "type-empty": [2, "never"],
  },
};
