module.exports = {
  extends: [
    'react-app',
    'react-app/jest',
    'prettier',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint'],
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
  ignorePatterns: ['*.config.*', '.eslintrc.js', 'node_modules/'],
  rules: {
    'import/prefer-default-export': 'off',
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
