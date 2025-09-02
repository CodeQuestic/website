import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow unescaped entities in JSX (common for apostrophes and quotes)
      "react/no-unescaped-entities": "off",

      // Or alternatively, you can configure it to only warn for specific characters
      // "react/no-unescaped-entities": ["warn", { "forbid": [">", "}"] }],

      // Allow unused expressions (sometimes needed for type assertions)
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
    },
  },
];

export default eslintConfig;
