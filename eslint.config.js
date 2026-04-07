import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";

export default [
  js.configs.recommended,

  ...tseslint.configs.recommendedTypeChecked, // ✅ IMPORTANT

  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: true // ✅ REQUIRED for strict typing
      }
    },
    rules: {
      "prettier/prettier": "error",

      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "warn",

      "@typescript-eslint/no-explicit-any": "warn",

      "@typescript-eslint/explicit-module-boundary-types": "error",

      "@typescript-eslint/typedef": [
        "error",
        {
          parameter: true
        }
      ]
    },
    plugins: {
      prettier
    }
  }
];