module.exports = {
    testPathIgnorePatters: ["/node_modules/", "/.next/"],
    setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    testEnvironment: "jsdom",
    moduleNameMapper: {
        '@/(.*)': '<rootDir>./src/$1'
    }
};