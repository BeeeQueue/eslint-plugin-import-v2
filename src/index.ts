import { ESLint } from "eslint"
import { noDefaultExport } from "./rules/no-default-export"
import { noUndefinedDependencies } from "./rules/no-undefined-dependencies"

export default {
  meta: {
    name: PKG_NAME,
    version: PKG_VERSION,
  },

  rules: {
    "no-default-export": noDefaultExport,
    "no-undefined-dependencies": noUndefinedDependencies,
  },

  configs: {
    recommended: {
      rules: {
        "no-default-export": "error",
        "no-undefined-dependencies": "error",
      },
    },
  },
} satisfies ESLint.Plugin
