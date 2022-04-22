module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier', 'filenames', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    'disable-next-line': [0, {extensions: ['.js', '.jsx', '.ts', '.tsx']}],
    'import/extensions': [1, {extensions: ['.js', '.jsx', '.ts', '.tsx']}], // There is no need for each import statement highlight the file's extension
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.ts', '.tsx']}], // It should allow us to write JSX in files with .tsx extension
    'react/jsx-props-no-spreading': [1, {custom: 'ignore'}], // In the root component (Myapp) we have ...pageProps which is out of reach from us to pass all the props manually, so that's why we added this rule.
    'jsx-a11y/no-static-element-interactions': 0, // The same as jsx-a11y/click-events-have-key-events
    'react/no-array-index-key': 0, // In application we have both static lists and expanding lists, neither draggable nor removing from the middle of array approach. So we can use that safely.
    'consistent-return': 0, // In application it requires to put return at the end of the arrow function which in the majority places will cause an issue.
    'react/function-component-definition': [1, {namedComponents: 'arrow-function'}], // We need to have only one type of functions here we are choosing arrow-function
    'jsx-a11y/click-events-have-key-events': 0, // There are no need to give role attribute to each element - there are divs, spans etc... which are asking for a role
    'jsx-a11y/media-has-caption': 0, // We don't need this kind of feature it is asking not required attributes which is not given by quickblox and can't affect to anything
    'no-use-before-define': 'off', // While using JSX in our component we have to import React (that's what linter suggests), in contrast we are getting error if we don't use this rule.
    'no-throw-literal': 0, // No Need for this kind of thing because you can easily throw and Error As object - For example we are getting that kind of responses from BE
    'no-shadow': 'off', // This One is disabled because rule have no support for ts, but at the bottom we have enabled @typescript-eslint/no-shadow instead of
    '@typescript-eslint/no-shadow': 'error',
    'filenames/match-regex': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'strictCamelCase', 'PascalCase'],
      },
    ],
    'import/no-unresolved': 'error', // turn on errors for missing imports
    'no-param-reassign': 0,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: 'packages/*/tsconfig.json',
      },
    },
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
}
