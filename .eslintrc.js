module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint"],
  settings: {
    react: {
      version: "latest",
    },
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx", "ts"],
      },
    ], // should add ".ts" if typescript project
    "no-useless-escape": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-use-before-define": [
      "off",
      {
        functions: true,
        classes: false,
      },
    ],
    "prettier/prettier": [
      2,
      {
        semi: false,
        arrowParens: "always",
        singleQuote: false,
        jsxBracketSameLine: false,
        tabWidth: 2,
        trailingComma: "es5",
        useTabs: false,
        printWidth: 80,
      },
    ],
  },
}
