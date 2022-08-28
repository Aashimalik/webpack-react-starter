module.exports = {
  ignoreFiles: ["**/dist/**/*", "**/node_modules/**/*"],
  processors: [
    [
      "stylelint-processor-styled-components",
      {
        parserPlugins: [
          "jsx",
          "objectRestSpread",
          ["decorators", { decoratorsBeforeExport: true }],
          "classProperties",
          "exportExtensions",
          "asyncGenerators",
          "functionBind",
          "functionSent",
          "dynamicImport",
          "optionalCatchBinding",
          "optionalChaining",
          "exportDefaultFrom",
          "exportNamespaceFrom",
          "nullishCoalescingOperator",
        ],
      },
    ],
  ],
  extends: ["stylelint-config-styled-components"],
  plugins: ["stylelint-order"],
  syntax: "scss",
  rules: {
    indentation: 2,
    "max-nesting-depth": 2,
    "max-line-length": 85,

    "no-eol-whitespace": true,
    "no-extra-semicolons": true,
    "no-missing-end-of-source-newline": true,
    "no-unknown-animations": true,

    "selector-list-comma-newline-after": "always-multi-line",

    "number-leading-zero": "always",

    "string-no-newline": true,
    "string-quotes": "single",

    "unit-disallowed-list": [
      ["rem", "em"],
      { ignoreProperties: { em: ["letter-spacing", "line-height"] } },
    ],
    "unit-case": "lower",
    "unit-no-unknown": true,

    "value-no-vendor-prefix": [true, { ignoreValues: ["box"] }],

    "shorthand-property-no-redundant-values": true,

    "property-disallowed-list": ["float", "clear"], // Use flexbox
    "property-no-vendor-prefix": [true, { ignoreProperties: ["box-orient"] }],

    "declaration-no-important": true,
    "declaration-colon-space-after": "always",
    "declaration-colon-space-before": "never",

    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",

    "block-closing-brace-newline-after": "always",
    "block-closing-brace-space-after": "always-single-line",
    "block-closing-brace-space-before": "always-single-line",
    "block-no-empty": true,
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always-single-line",

    "selector-no-vendor-prefix": true, // http://stylelint.io/user-guide/rules/selector-no-vendor-prefix/
    "selector-max-compound-selectors": 2,
    "selector-no-qualifying-type": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "single",
    "selector-pseudo-element-no-unknown": true,
    // Ignore inlined styled component (e.g. `& > ${Button} { ... }`)
    "selector-type-no-unknown": [true, { ignoreTypes: ["$dummyValue"] }],
    "selector-max-empty-lines": 0,

    "media-feature-parentheses-space-inside": "never",

    "at-rule-name-case": "lower",
    "comment-whitespace-inside": "always",
  },
};
