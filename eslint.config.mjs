import { nextJsConfig } from "@repo/eslint-config/next-js";
import { nestJsConfig } from "@repo/eslint-config/nest-js";
import { config as reactInternalConfig } from "@repo/eslint-config/react-internal";

/** @param {import("eslint").Linter.Config[]} configs */
function scopeConfig(configs, files) {
  return configs.map((entry) => {
    if ("ignores" in entry && entry.ignores) {
      return entry;
    }
    if ("files" in entry && entry.files) {
      return entry;
    }
    return { ...entry, files };
  });
}

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/.next/**",
      "**/out/**",
      "**/build/**",
    ],
  },
  ...scopeConfig(nextJsConfig, ["apps/web/**/*.{js,jsx,ts,tsx,mjs,cjs}"]),
  ...scopeConfig(nestJsConfig, ["apps/api/**/*.{js,jsx,ts,tsx,mjs,cjs}"]),
  ...scopeConfig(reactInternalConfig, [
    "packages/ui/**/*.{js,jsx,ts,tsx,mjs,cjs}",
  ]),
];
