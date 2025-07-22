// packages/components/jest.config.js
const jestStencilRunner = require('jest-stencil-runner');
const createJestStencilPreset = jestStencilRunner.createJestStencilPreset;
module.exports = createJestStencilPreset({
  rootDir: __dirname,
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    '/node_modules/(?!(@stencil/core|@infineon/infineon-icons)/)', // Corrected regex
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'jest-transform-stub',
  },
  // Coverage options
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.stories.{ts,tsx}'
  ],
  haste: {
    providesModuleNodeModules: ['@infineon/infineon-design-system-stencil'],
  },
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],

  // Test matching
  testMatch: [
    '**/__tests__/**/*.(test|spec).(ts|tsx|js)',
    '**/*.(test|spec).(ts|tsx|js)',
  ],

  // Module configuration
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  // Additional Jest options
  verbose: true,
setupFilesAfterEnv: ['./src/test-setup.ts']});