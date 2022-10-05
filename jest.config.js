/** @type {import('jest').Config} */

export default {
  moduleNameMapper: {
    "@src/(.*)": ["<rootDir>/src/$1"],
    "@components/(.*)": ["<rootDir>/src/components/$1"],
    "@pages/(.*)": ["<rootDir>/src/pages/$1"],
    "@styles/(.*)": ["<rootDir>/src/styles/$1"],
    "@hooks/(.*)": ["<rootDir>/src/hooks/$1"],
    "@types/(.*)": ["<rootDir>/src/types/$1"],
    "\\.css": ["<rootDir>/mocks/mockStyle.js"],
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/@uiball/loaders"],
};
