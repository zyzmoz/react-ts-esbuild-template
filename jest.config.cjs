// jest.config.cjs
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  testMatch: ['**/__tests__/**/*.(spec|test).(ts|tsx|js)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts']
};
