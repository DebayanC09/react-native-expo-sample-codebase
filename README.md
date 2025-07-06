# React Native Expo Sample Codebase Setup Guide

This guide provides step-by-step instructions to set up a React Native Expo project with ESLint, Prettier, Husky, Lint-Staged, and Commitlint for code quality and consistent commit messages.

## Recommended VSCode Extensions

For the best development experience, it is recommended to install the following VSCode extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [SonarLint (SonarQube)](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)

These extensions help maintain code quality, consistent formatting, and catch code smells or bugs early during development. Opening this project in VSCode will prompt you to install these if you don't have them already.

## 1. Project Creation

First, create a new Expo project.

```bash
yarn create expo-app your-project-name --template blank-typescript
cd your-project-name
```

## 2. ESLint and Prettier Setup

### Install ESLint and Prettier Dependencies

Install ESLint, Prettier, and their related plugins and configurations.

```bash
yarn add --dev eslint eslint-config-expo eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-native prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-import eslint-plugin-react-hooks eslint-plugin-sonarjs
```

**Package Descriptions:**

- **eslint**: A pluggable linting utility for JavaScript and JSX. It helps find and fix problems in your JavaScript code.
- **eslint-config-expo**: ESLint configuration for Expo projects.
- **eslint-config-prettier**: Turns off all rules that are unnecessary or might conflict with Prettier.
- **eslint-plugin-prettier**: Runs Prettier as an ESLint rule.
- **eslint-plugin-react-native**: ESLint rules for React Native.
- **prettier**: An opinionated code formatter that enforces a consistent style by parsing your code and re-printing it with its own rules.
- **@typescript-eslint/eslint-plugin**: An ESLint plugin that provides linting rules for TypeScript codebases.
- **@typescript-eslint/parser**: An ESLint parser that allows ESLint to lint TypeScript code.
- **eslint-plugin-import**: Supports linting of ES2015+ import/export syntax, and prevents issues with file paths and import order.
- **eslint-plugin-react-hooks**: Enforces rules of Hooks and checks the exhaustive dependencies for React Hooks.
- **eslint-plugin-sonarjs**: ESLint plugin for SonarJS rules, which help detect bugs and code smells.

### Configure ESLint

Create or modify `.eslintrc.json` to configure ESLint with Expo, React Native, and Prettier rules.

**File: `.eslintrc.json`**

```json
{
  "extends": [
    "expo",
    "plugin:react-native/all",
    "prettier",
    "plugin:sonarjs/recommended-legacy",
    "plugin:import/recommended"
  ],
  "plugins": [
    "react-native",
    "prettier",
    "sonarjs",
    "import",
    "@typescript-eslint",
    "react-hooks"
  ],
  "parser": "@typescript-eslint/parser",
  "ignorePatterns": ["/dist/*", "node_modules/"],
  "rules": {
    "prettier/prettier": ["error", {"singleQuote": false}],
    "import/no-unresolved": "warn",
    "react-native/no-inline-styles": "warn",
    "react-native/no-color-literals": "warn",
    "react-native/no-raw-text": "off",
    "react-native/sort-styles": "off",
    "react/display-name": "off",
    "sonarjs/no-commented-code": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ],
        "pathGroups": [
          {
            "pattern": "react",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "react-native",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@react-native/**",
            "group": "external",
            "position": "before"
          },
          {
            "pattern": "@/**",
            "group": "internal",
            "position": "before"
          },
          {
            "pattern": "~/**",
            "group": "internal",
            "position": "before"
          }
        ],
        "pathGroupsExcludedImportTypes": ["react", "react-native"],
        "newlines-between": "always",
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ],
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
    "sort-imports": [
      "error",
      {
        "ignoreCase": true,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        "allowSeparatedGroups": true
      }
    ]
  },
  "settings": {
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  }
}
```

Create `.eslintignore` to explicitly ignore files from ESLint.

**File: `.eslintignore`**

```
.prettierrc.json
# Dependencies
/node_modules

# Expo
/.expo/

# Build artifacts
/android/build/
/ios/build/
/ios/Pods/

# Lock files
yarn.lock
package-lock.json
Podfile.lock

# Misc
.DS_Store
```

### Configure Prettier

Create or modify `.prettierrc.json` to configure Prettier.

**File: `.prettierrc.json`**

```json
{
  "arrowParens": "avoid",
  "bracketSameLine": true,
  "bracketSpacing": false,
  "singleQuote": false,
  "trailingComma": "all"
}
```

Create `.prettierignore` to explicitly ignore files from Prettier.

**File: `.prettierignore`**

```
# Dependencies
/node_modules

# Expo
/.expo/

# Build artifacts
/android/build/
/ios/build/
/ios/Pods/

# Lock files
yarn.lock
package-lock.json
Podfile.lock

# Misc
.DS_Store
```

## 3. Husky, Lint-Staged, and Commitlint Setup

### Install Dependencies

Install Husky for Git hooks, Lint-Staged to run linters on staged files, and Commitlint for commit message validation.

```bash
yarn add --dev husky lint-staged @commitlint/cli @commitlint/config-conventional
```

### Initialize Husky

Initialize Husky in your project.

```bash
npx husky
```

### Configure Husky Hooks

Create the `pre-commit` hook to run `lint-staged`.

**File: `.husky/pre-commit`**

```bash
npx lint-staged
```

Create the `commit-msg` hook to run `commitlint`.

**File: `.husky/commit-msg`**

```bash
npx --no -- commitlint --edit "$1"
```

### Configure Lint-Staged

Add the `lint-staged` configuration to your `package.json` to run ESLint and Prettier on staged files.

**File: `package.json` (add this section)**

```json
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix"
    ],
    "*.{js,jsx,ts,tsx,json,css,md}": [
      "prettier --write"
    ]
  }
```

### Configure Commitlint

Create `commitlint.config.json` to enforce conventional commit messages.

**File: `commitlint.config.json`**

```javascript
module.exports = {
  extends: ["@commitlint/config-conventional"],
};
```

## 4. Add Scripts to package.json

Ensure your `package.json` includes these scripts for convenience.

**File: `package.json` (add/verify these scripts)**

```json
  "scripts": {
    "start": "expo start",
    "android": "expo run:android",
    "ios": "expo run:ios",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
    "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "type-check": "tsc --noEmit",
    "prepare": "husky"
  },
```
