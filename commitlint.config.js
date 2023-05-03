module.exports = {
  // extends: ["@commitlint/config-conventional"],
  rules: {
    "body-max-length": [1, "always", 600],
    "scope-empty": [2, "never"],
    "scope-enum": [2, "always", ["fe", "be"]],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      ["build", "docs", "feat", "fix", "perf", "test"],
    ],
  },
};
