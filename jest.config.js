const {defaults: tsjPreset} = require("ts-jest/presets");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    ...tsjPreset,
    collectCoverage: true,
    coverageReporters: ["lcov"],
    coverageDirectory: "coverage",
    preset: "react-native",
    // setupFilesAfterEnv: [
    //   "@testing-library/jest-native/extend-expect"
    // ],
    setupFiles: [
        "./jestSetupFile.js",
        "<rootDir>/__setup__/setup.ts",
    ],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
        "^.+\\.jsx?$": "babel-jest",
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.spec.json",
            },
        ],
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    transformIgnorePatterns: [
        "node_modules/(?!(jest-)?@?react-native|@react-navigation/*)",
        "node_modules/(?!(jest-)?@react-native|react-native|@rneui/*)",
    ],
    modulePathIgnorePatterns: [
        "mocks"
    ]
};
