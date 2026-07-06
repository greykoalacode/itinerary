import { config as baseConfig } from "./base.js";
import globals from "globals";

/** @type {import("eslint").Linter.Config[]} */
export const nestJsConfig = [
  ...baseConfig,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: "commonjs",
    },
  },
];
