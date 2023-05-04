module.exports = {
  rules: {
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      ["Build", "Docs", "Feat", "Fix", "Perf", "Test", "Style"],
    ],
    "scope-enum": [2, "always", ["FE", "BE"]],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
  },
  prompt: {
    questions: {
      type: {
        description: "Select the type of change that you're committing:",
        enum: {
          Feat: {
            description: 'A new feature',
            title: 'Features',
            emoji: '✨',
          },
          Fix: {
            description: 'A bug fix',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          Docs: {
            description: 'Documentation only changes',
            title: 'Documentation',
            emoji: '📚',
          },
          Style: {
            description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
            title: 'Styles',
            emoji: '💎',
          },
          Perf: {
            description: 'A code change that improves performance',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          Test: {
            description: 'Adding missing tests or correcting existing tests',
            title: 'Tests',
            emoji: '🚨',
          },
          Build: {
            description: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
            title: 'Builds',
            emoji: '🛠',
          }
        },
      },
      scope: {
        description:
          'What is the scope of this change (e.g. Frontend or Backend)',
      },
      subject: {
        description: 'Write a short, imperative tense description of the change',
      }
    },
  }
};
