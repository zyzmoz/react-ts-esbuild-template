// jest.config.cjs
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js'
  },
  testMatch: ['**/__tests__/**/*.(spec|test).(ts|tsx|js)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};
