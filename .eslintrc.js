module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", "tsx"],
      },
    ], // should add ".ts" if typescript project
    "no-useless-escape": "off",

    "no-use-before-define": [
      "off",
      {
        functions: true,
        classes: false,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        jsxBracketSameLine: false,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: "es5",
        useTabs: false,
        printWidth: 800,
      },
    ],
  },
}
