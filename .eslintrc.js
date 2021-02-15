module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "react/prop-types": 0,
    "react/no-unescaped-entities": ["error", {"forbid": [">", "}"]}],
    "react/display-name": 0,
    "no-console": ["error", { allow: ["warn", "error"] }],
    "prettier/prettier": "error"
  }
};
