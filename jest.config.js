const { defaults } = require('jest-config');

module.exports = {
    // verbose: true,
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
    ],

    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],

    testPathIgnorePatterns: [
        '/node_modules/',
        '/.history',
        '/.next/'
    ],

    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
        '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    },

    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.module\\.(css|sass|scss)$',
    ],

    // Module file extensions for importing
    moduleFileExtensions: ['ts', 'tsx', ...defaults.moduleFileExtensions],

    moduleNameMapper: {
        '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
};