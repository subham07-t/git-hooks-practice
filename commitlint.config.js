module.exports = {
  // extends: ["@commitlint/config-conventional"],
  rules: {
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      ["Build", "Docs", "Feat", "Fix", "Perf", "Test"],
    ],
    "scope-empty": [2, "never"],
    "scope-enum": [2, "always", ["FE", "BE"]],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "body-max-length": [1, "always", 600],
  },
};
