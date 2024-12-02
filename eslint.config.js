import { default as js } from "@eslint/js";
import * as tsParser from "@typescript-eslint/parser";
import eslintPluginAstro from "eslint-plugin-astro";
import solid from "eslint-plugin-solid/configs/typescript";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: [
      "node_modules",
      "dist",
      "build",
      ".astro",
      "tailwind.config.ts",
      ".prettierrc.mjs",
    ],
  },
  js.configs.recommended,
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    ...solid,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
];
