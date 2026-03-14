const nextPlugin = require("eslint-config-next");
const tseslint = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");

/** @type {import("eslint").Linter.Config[]} */
module.exports = [
  ...nextPlugin,
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        }
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      // TypeScript
      "@typescript-eslint/no-explicit-any": "warn",

      // Content-heavy marketing pages often contain apostrophes/quotes;
      // relaxing this keeps the content readable without noisy escaping.
      "react/no-unescaped-entities": "off",

      // Next.js recommends <Image>, but allow <img> for now to avoid
      // large refactors across content components.
      "@next/next/no-img-element": "off",

      // React 19+ hook lint rules that are a bit too strict for the
      // existing code; disable for now to keep lint green.
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/immutability": "off",
      "react-hooks/purity": "off",
    },
  },
];


