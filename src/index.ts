import { ESLint } from "eslint"
import { order } from "./rules/order.js"
import { noDefaultExport } from "./rules/no-default-export.js"
import { noUndefinedDependencies } from "./rules/no-undefined-dependencies.js"

const plugin = {
  meta: {
    name: PKG_NAME,
    version: PKG_VERSION,
  },

  rules: {
    order: order,
    "no-default-export": noDefaultExport,
    "no-undefined-dependencies": noUndefinedDependencies,
  },

  configs: {
    recommended: {
      plugins: {},
      rules: {
        "import/order": "error",
        "import/no-default-export": "error",
        "import/no-undefined-dependencies": "error",
      },
    },
    all: {
      plugins: {},
      rules: {
        "import/order": "error",
        "import/no-default-export": "error",
        "import/no-undefined-dependencies": "error",
      },
    },
  },
} satisfies ESLint.Plugin

plugin.configs.recommended.plugins = { import: plugin }
plugin.configs.all.plugins = { import: plugin }

// eslint-disable-next-line import/no-default-export
export default plugin
