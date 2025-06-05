const { getJestProjects } = require('@nx/jest');

export default {
  projects: getJestProjects(),
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@header-mfe/(.*)$': '<rootDir>/header-mfe/src/$1',
    '^@products-mfe/(.*)$': '<rootDir>/products-mfe/src/$1',
    '^@shell/(.*)$': '<rootDir>/shell/src/$1',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.tsx',
    '!src/bootstrap.tsx',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};